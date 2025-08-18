#!/usr/bin/env pwsh

# Script to fix cover image paths in all HackTheBox writeups

function Fix-CoverImagePath {
    param(
        [string]$FilePath
    )
    
    try {
        $content = Get-Content $FilePath -Raw -Encoding UTF8
        $fileName = [System.IO.Path]::GetFileNameWithoutExtension($FilePath)
        
        # Pattern to match the current cover section
        $coverPattern = '(?s)\[cover\]\s*\n\s*image = "([^"]+)"\s*\n\s*alt = "([^"]+)"\s*\n\s*caption = "([^"]+)"\s*\n\s*relative = true'
        
        if ($content -match $coverPattern) {
            $currentImage = $matches[1]
            $altText = $matches[2]
            $caption = $matches[3]
            
            # Generate the new absolute path
            $newImagePath = "/writeups/hackthebox/$fileName/$fileName.png"
            
            # Create the new cover section
            $newCoverSection = @"
[cover]
    image = "$newImagePath"
    alt = "$altText"
    caption = "$caption"
    relative = false
"@
            
            # Replace the old cover section with the new one
            $newContent = $content -replace $coverPattern, $newCoverSection
            
            if ($newContent -ne $content) {
                $newContent | Out-File -FilePath $FilePath -Encoding UTF8 -NoNewline
                Write-Host "Fixed cover image path in $FilePath" -ForegroundColor Green
                Write-Host "  Old: $currentImage" -ForegroundColor Yellow
                Write-Host "  New: $newImagePath" -ForegroundColor Cyan
                return $true
            }
        } else {
            Write-Host "No cover section found in $FilePath" -ForegroundColor Red
            return $false
        }
        
    } catch {
        Write-Host "Error processing $FilePath`: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
    
    return $false
}

# Main execution
Write-Host "Fixing cover image paths in all HackTheBox writeups..." -ForegroundColor Green

$htbFiles = Get-ChildItem "content\writeups\hackthebox\*.md" -Exclude "_index.md"
$totalFiles = $htbFiles.Count
$processedFiles = 0
$fixedFiles = 0

foreach ($file in $htbFiles) {
    $processedFiles++
    Write-Host "`nProcessing ($processedFiles/$totalFiles): $($file.Name)" -ForegroundColor Cyan
    
    if (Fix-CoverImagePath -FilePath $file.FullName) {
        $fixedFiles++
    }
}

Write-Host "`nCover image path fixing completed!" -ForegroundColor Green
Write-Host "Processed: $processedFiles files" -ForegroundColor Green
Write-Host "Fixed: $fixedFiles files" -ForegroundColor Green
