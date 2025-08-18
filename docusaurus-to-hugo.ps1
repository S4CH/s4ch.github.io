# Docusaurus to Hugo Migration Script
# Converts front matter and adjusts image paths without rewriting content

param(
    [string]$Platform = "hackthebox",  # hackthebox or tryhackme
    [string]$MachineName,
    [switch]$DryRun = $false,
    [switch]$Force = $false
)

if (-not $MachineName) {
    Write-Host "Usage: .\docusaurus-to-hugo.ps1 -Platform [hackthebox|tryhackme] -MachineName [name] [-DryRun] [-Force]"
    Write-Host "Example: .\docusaurus-to-hugo.ps1 -Platform hackthebox -MachineName Academy"
    exit 1
}

function Convert-DocusaurusToHugo {
    param([string]$Content, [string]$Platform, [string]$MachineName)
    
    # Split content into front matter and body
    $lines = $Content -split "`n"
    $frontMatterStart = -1
    $frontMatterEnd = -1
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i].Trim() -eq "---") {
            if ($frontMatterStart -eq -1) {
                $frontMatterStart = $i
            } else {
                $frontMatterEnd = $i
                break
            }
        }
    }
    
    if ($frontMatterStart -eq -1 -or $frontMatterEnd -eq -1) {
        Write-Host "No valid front matter found"
        return $Content
    }
    
    # Extract front matter and body
    $frontMatterLines = $lines[($frontMatterStart + 1)..($frontMatterEnd - 1)]
    $bodyLines = $lines[($frontMatterEnd + 1)..($lines.Length - 1)]
    
    # Parse YAML front matter
    $frontMatter = @{}
    foreach ($line in $frontMatterLines) {
        if ($line.Trim() -eq "" -or $line.Trim().StartsWith("#")) { continue }
        
        if ($line -match "^(\w+):\s*(.*)$") {
            $key = $matches[1].Trim()
            $value = $matches[2].Trim()
            
            # Handle arrays
            if ($value -eq "" -and $line.EndsWith(":")) {
                $frontMatter[$key] = @()
                continue
            }
            
            # Handle array items
            if ($line.Trim().StartsWith("- ")) {
                $arrayValue = $line.Trim().Substring(2).Trim()
                if (-not $frontMatter.ContainsKey("_currentArray")) {
                    $frontMatter["_currentArray"] = $key
                    $frontMatter[$key] = @()
                }
                $frontMatter[$key] += $arrayValue
                continue
            }
            
            $frontMatter[$key] = $value
        } elseif ($line.Trim().StartsWith("- ")) {
            # Array item without explicit key
            $arrayValue = $line.Trim().Substring(2).Trim()
            $currentKey = $frontMatter["_currentArray"]
            if ($currentKey) {
                $frontMatter[$currentKey] += $arrayValue
            }
        }
    }
    
    # Remove helper key
    $frontMatter.Remove("_currentArray")
    
    # Extract title and infer metadata
    $title = $frontMatter["title"] -replace '"', '' -replace "'", ''
    $title = $title.Trim()
    
    # Infer description from first paragraph of body
    $description = ""
    $summary = ""
    $firstParagraph = ""
    
    foreach ($line in $bodyLines) {
        if ($line.Trim() -ne "" -and -not $line.Trim().StartsWith("#") -and -not $line.Trim().StartsWith("!")) {
            $firstParagraph = $line.Trim()
            break
        }
    }
    
    if ($firstParagraph) {
        $description = "$title writeup - $firstParagraph"
        $summary = $firstParagraph
        if ($description.Length -gt 160) {
            $description = $description.Substring(0, 157) + "..."
        }
        if ($summary.Length -gt 120) {
            $summary = $summary.Substring(0, 117) + "..."
        }
    }
    
    # Convert date format
    $date = $frontMatter["date"]
    if ($date) {
        try {
            $parsedDate = [DateTime]::Parse($date)
            $date = $parsedDate.ToString("yyyy-MM-ddTHH:mm:ssZ")
        } catch {
            $date = "2021-01-01T00:00:00Z"
        }
    } else {
        $date = "2021-01-01T00:00:00Z"
    }
    
    # Build Hugo TOML front matter
    $hugoFrontMatter = @"
+++
title = '$title'
date = $date
author = 's4ch'
description = '$description'
summary = '$summary'
slug = '$($MachineName.ToLower())'
draft = false

categories = ['writeups']
series = ['$(if ($Platform -eq "hackthebox") { "HackTheBox" } else { "TryHackMe" })']
tags = [
    'ctf',
    '$($Platform.ToLower())',
    'penetration-testing',
    'writeup'
"@

    # Add original tags
    if ($frontMatter["tags"]) {
        foreach ($tag in $frontMatter["tags"]) {
            $tag = $tag.Trim() -replace '"', '' -replace "'", ''
            if ($tag -ne "writeups" -and $tag -ne "ctf" -and $tag -ne $Platform.ToLower()) {
                $hugoFrontMatter += ",`n    '$tag'"
            }
        }
    }
    
    $hugoFrontMatter += "`n]"
    
    # Add machine-specific metadata
    $hugoFrontMatter += @"

difficulty = 'Unknown'
platform = '$(if ($Platform -eq "hackthebox") { "HackTheBox" } else { "TryHackMe" })'
os = 'Unknown'
points = 'N/A'
release_date = '$($date.Split("T")[0])'
"@

    # Add cover image if thumbnail exists
    if ($frontMatter["thumbnail"]) {
        $imageName = $frontMatter["thumbnail"] -replace ".*/", ""
        $hugoFrontMatter += @"

[cover]
    image = "$imageName"
    alt = "$title Machine"
    caption = "$title"
    relative = true
"@
    }
    
    # Add Hugo settings
    $hugoFrontMatter += @"

ShowReadingTime = true
ShowWordCount = true
showtoc = $(if ($frontMatter["toc"] -eq "true") { "true" } else { "false" })
tocopen = false
+++
"@
    
    # Process body content - fix image paths
    $processedBody = @()
    foreach ($line in $bodyLines) {
        # Convert image paths from Docusaurus to Hugo
        if ($line -match '!\[([^\]]*)\]\(/img/([^/]+)/([^)]+)\)') {
            $alt = $matches[1]
            $platform = $matches[2].ToLower()
            $filename = $matches[3]
            $newPath = "/writeups/$platform/$($MachineName.ToLower())/$filename"
            $line = $line -replace '!\[([^\]]*)\]\(/img/([^/]+)/([^)]+)\)', "![$alt]($newPath)"
        }
        
        $processedBody += $line
    }
    
    # Combine front matter and body
    return $hugoFrontMatter + "`n`n" + ($processedBody -join "`n")
}

# Main execution
$SourcePath = if ($Platform -eq "hackthebox") { "writeups/HackTheBox" } else { "writeups/Tryhackme" }
$TargetDir = "content/writeups/$Platform"
$TargetFile = "$TargetDir/$($MachineName.ToLower()).md"

# Check if machine exists in old branch
try {
    $Files = git show "origin/main-old:$SourcePath/$MachineName/" --name-only 2>$null
    $WriteupFile = $Files | Where-Object { $_ -match "\.(md|markdown)$" } | Select-Object -First 1
    
    if (-not $WriteupFile) {
        Write-Host "No markdown files found for $MachineName"
        exit 1
    }
    
    $SourceFile = "$SourcePath/$MachineName/$WriteupFile"
    Write-Host "Found writeup: $SourceFile"
    
    # Check if target already exists
    if ((Test-Path $TargetFile) -and -not $Force) {
        Write-Host "Target file already exists: $TargetFile"
        Write-Host "Use -Force to overwrite"
        exit 1
    }
    
    if ($DryRun) {
        Write-Host "[DRY RUN] Would convert $SourceFile to $TargetFile"
        exit 0
    }
    
    # Extract original content
    $originalContent = git show "origin/main-old:$SourceFile" 2>$null
    if (-not $originalContent) {
        Write-Host "Failed to extract content from $SourceFile"
        exit 1
    }
    
    # Convert content
    Write-Host "Converting Docusaurus format to Hugo format..."
    $convertedContent = Convert-DocusaurusToHugo -Content $originalContent -Platform $Platform -MachineName $MachineName
    
    # Ensure target directory exists
    $targetDirPath = Split-Path $TargetFile -Parent
    if (-not (Test-Path $targetDirPath)) {
        New-Item -ItemType Directory -Path $targetDirPath -Force | Out-Null
    }
    
    # Write converted content
    $convertedContent | Out-File -FilePath $TargetFile -Encoding UTF8
    
    Write-Host "Successfully converted: $TargetFile"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Review the converted file for accuracy"
    Write-Host "2. Update difficulty, OS, and points in the front matter"
    Write-Host "3. Add cover image to static/writeups/$Platform/$($MachineName.ToLower())/"
    Write-Host "4. Test with: hugo server --buildDrafts"
    
} catch {
    Write-Host "Error: $_"
    exit 1
}
