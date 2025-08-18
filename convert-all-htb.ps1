#!/usr/bin/env pwsh

param(
    [string]$MachineName = "",
    [switch]$All = $false,
    [switch]$Force = $false
)

function Convert-DocusaurusToHugo {
    param(
        [string]$MachineName,
        [switch]$Force
    )
    
    $machineLower = $MachineName.ToLower()
    $sourceFile = "temp-$machineLower-original.md"
    $targetFile = "content\writeups\hackthebox\$machineLower.md"
    
    # Check if target already exists
    if ((Test-Path $targetFile) -and !$Force) {
        Write-Host "Target file $targetFile already exists. Use -Force to overwrite." -ForegroundColor Yellow
        return
    }
    
    try {
        # Extract the original writeup from git
        Write-Host "Extracting $MachineName writeup from main-old branch..." -ForegroundColor Cyan
        $gitContent = git show "origin/main-old:writeups/HackTheBox/$MachineName/write-up.md" 2>$null
        
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Error: Could not find writeup for $MachineName in main-old branch" -ForegroundColor Red
            return
        }
        
        $gitContent | Out-File -FilePath $sourceFile -Encoding UTF8
        
        # Read the original content
        $content = Get-Content $sourceFile -Raw -Encoding UTF8
        
        # Extract YAML front matter if it exists
        $yamlPattern = '(?s)^---\s*\n(.*?)\n---\s*\n(.*)'
        $frontMatter = @{}
        $markdownContent = $content
        
        if ($content -match $yamlPattern) {
            $yamlContent = $matches[1]
            $markdownContent = $matches[2]
            
            # Parse YAML front matter
            $yamlLines = $yamlContent -split '\n'
            foreach ($line in $yamlLines) {
                if ($line -match '^\s*([^:]+):\s*(.*)$') {
                    $key = $matches[1].Trim()
                    $value = $matches[2].Trim()
                    $value = $value -replace '^["'']|["'']$', ''  # Remove quotes
                    $frontMatter[$key] = $value
                }
            }
        }
        
        # Fix image paths in content - remove existing image references since we'll use cover
        $markdownContent = $markdownContent -replace '!\[.*?\]\(/img/HackTheBox/.*?\)', ''
        $markdownContent = $markdownContent -replace '!\[.*?\]\(.*?\.png\)', ''
        
        # Clean up excessive newlines
        $markdownContent = $markdownContent -replace '\n\s*\n\s*\n+', "`n`n"
        
        # Generate Hugo front matter in TOML format
        $date = if ($frontMatter.ContainsKey('date')) { $frontMatter['date'] } else { (Get-Date).ToString('yyyy-MM-ddTHH:mm:ssZ') }
        $title = if ($frontMatter.ContainsKey('title')) { $frontMatter['title'] } else { $MachineName }
        $description = if ($frontMatter.ContainsKey('description')) { $frontMatter['description'] } else { "$MachineName HackTheBox writeup" }
        
        # Determine difficulty and OS from content analysis
        $difficulty = "Unknown"
        $os = "Unknown"
        
        if ($markdownContent -match '(?i)(easy|medium|hard|insane)') {
            $difficulty = (Get-Culture).TextInfo.ToTitleCase($matches[1].ToLower())
        }
        
        if ($markdownContent -match '(?i)(linux|windows|freebsd|solaris)') {
            $os = (Get-Culture).TextInfo.ToTitleCase($matches[1].ToLower())
        }
        
        $hugoFrontMatter = @"
+++
title = '$title'
date = '$date'
author = 's4ch'
description = '$description'
summary = '$title is a HackTheBox machine writeup featuring penetration testing techniques and security assessment.'
slug = '$machineLower'
draft = false

categories = [
    'writeups'
]
series = [
    'HackTheBox'
]
tags = [
    'ctf',
    'hackthebox',
    'penetration-testing',
    'writeup',
    '$($os.ToLower())',
    '$($difficulty.ToLower())'
]

# Machine Information
difficulty = '$difficulty'
platform = 'HackTheBox'
os = '$os'
points = '20'
release_date = '$date'

[cover]
    image = "$machineLower.png"
    alt = "$MachineName HackTheBox Machine"
    caption = "$MachineName - $difficulty $os Machine"
    relative = true

# Show specific elements
ShowReadingTime = true
ShowWordCount = true
showtoc = true
tocopen = false
+++

"@
        
        # Combine front matter and content
        $finalContent = $hugoFrontMatter + $markdownContent.Trim()
        
        # Write the converted content
        $finalContent | Out-File -FilePath $targetFile -Encoding UTF8
        
        Write-Host "Successfully converted $MachineName writeup!" -ForegroundColor Green
        Write-Host "  Source: main-old branch writeups/HackTheBox/$MachineName/write-up.md"
        Write-Host "  Target: $targetFile"
        Write-Host "  Cover Image: $machineLower.png (already in static directory)"
        
        # Clean up temporary file
        Remove-Item $sourceFile -ErrorAction SilentlyContinue
        
    } catch {
        Write-Host "Error converting $MachineName`: $($_.Exception.Message)" -ForegroundColor Red
        Remove-Item $sourceFile -ErrorAction SilentlyContinue
    }
}

# Main execution
if ($All) {
    Write-Host "Converting all HackTheBox writeups..." -ForegroundColor Green
    
    # Get list of available writeups from temp file we created earlier
    $writeupDirs = Get-Content "htb-machines.txt" | Where-Object { $_ -and $_ -notmatch '^tree ' -and $_ -ne "_category_.yml" }
    
    $converted = 0
    $total = $writeupDirs.Count
    
    foreach ($writeup in $writeupDirs) {
        if ($writeup -and $writeup -ne "_category_.yml") {
            Write-Host "`nProcessing $writeup ($($converted + 1)/$total)..." -ForegroundColor Cyan
            Convert-DocusaurusToHugo -MachineName $writeup -Force:$Force
            $converted++
        }
    }
    
    Write-Host "`nBulk conversion completed!" -ForegroundColor Green
    Write-Host "Converted $converted out of $total writeups." -ForegroundColor Green
    
} elseif ($MachineName) {
    Convert-DocusaurusToHugo -MachineName $MachineName -Force:$Force
} else {
    Write-Host "Usage:" -ForegroundColor Yellow
    Write-Host "  .\convert-all-htb.ps1 -All [-Force]           # Convert all HackTheBox writeups"
    Write-Host "  .\convert-all-htb.ps1 -MachineName <name>     # Convert specific machine"
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor Yellow
    Write-Host "  .\convert-all-htb.ps1 -All -Force"
    Write-Host "  .\convert-all-htb.ps1 -MachineName 'Academy'"
}
