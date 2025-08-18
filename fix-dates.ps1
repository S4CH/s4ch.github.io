#!/usr/bin/env pwsh

# Script to fix date formats in Hugo front matter for all HackTheBox writeups

function Fix-DateFormat {
    param(
        [string]$FilePath
    )
    
    try {
        $content = Get-Content $FilePath -Raw -Encoding UTF8
        $modified = $false
        
        # Pattern to match date lines in TOML front matter
        $datePattern = "date = '([^']+)'"
        $releaseDatePattern = "release_date = '([^']+)'"
        
        if ($content -match $datePattern) {
            $originalDate = $matches[1]
            $fixedDate = Convert-ToHugoDate $originalDate
            if ($fixedDate -ne $originalDate) {
                $content = $content -replace "date = '$([regex]::Escape($originalDate))'", "date = '$fixedDate'"
                $modified = $true
                Write-Host "Fixed date in $FilePath`: '$originalDate' -> '$fixedDate'" -ForegroundColor Green
            }
        }
        
        if ($content -match $releaseDatePattern) {
            $originalReleaseDate = $matches[1]
            $fixedReleaseDate = Convert-ToHugoDate $originalReleaseDate
            if ($fixedReleaseDate -ne $originalReleaseDate) {
                $content = $content -replace "release_date = '$([regex]::Escape($originalReleaseDate))'", "release_date = '$fixedReleaseDate'"
                $modified = $true
                Write-Host "Fixed release_date in $FilePath`: '$originalReleaseDate' -> '$fixedReleaseDate'" -ForegroundColor Cyan
            }
        }
        
        if ($modified) {
            $content | Out-File -FilePath $FilePath -Encoding UTF8 -NoNewline
        }
        
    } catch {
        Write-Host "Error processing $FilePath`: $($_.Exception.Message)" -ForegroundColor Red
    }
}

function Convert-ToHugoDate {
    param(
        [string]$DateString
    )
    
    # Try to parse various date formats and convert to Hugo-compatible format
    try {
        # Handle format: "2020/09/26 20:00:00"
        if ($DateString -match '^(\d{4})/(\d{1,2})/(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$') {
            $year = $matches[1]
            $month = $matches[2].PadLeft(2, '0')
            $day = $matches[3].PadLeft(2, '0')
            $hour = $matches[4].PadLeft(2, '0')
            $minute = $matches[5].PadLeft(2, '0')
            $second = $matches[6].PadLeft(2, '0')
            return "$year-$month-${day}T${hour}:${minute}:${second}Z"
        }
        
        # Handle format: "2020/08/21"
        if ($DateString -match '^(\d{4})/(\d{1,2})/(\d{1,2})$') {
            $year = $matches[1]
            $month = $matches[2].PadLeft(2, '0')
            $day = $matches[3].PadLeft(2, '0')
            return "$year-$month-${day}T00:00:00Z"
        }
        
        # Handle format: "2020-09-26" (already good, just add time)
        if ($DateString -match '^(\d{4})-(\d{1,2})-(\d{1,2})$') {
            return "${DateString}T00:00:00Z"
        }
        
        # If already in RFC3339 format, return as-is
        if ($DateString -match '^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?$') {
            if ($DateString -notmatch 'Z$') {
                return "${DateString}Z"
            }
            return $DateString
        }
        
        # Try to parse as a .NET DateTime and convert
        $parsedDate = [DateTime]::Parse($DateString)
        return $parsedDate.ToString('yyyy-MM-ddTHH:mm:ssZ')
        
    } catch {
        Write-Host "Could not parse date: $DateString, using current date" -ForegroundColor Yellow
        return (Get-Date).ToString('yyyy-MM-ddTHH:mm:ssZ')
    }
}

# Main execution
Write-Host "Fixing date formats in all HackTheBox writeups..." -ForegroundColor Green

$htbFiles = Get-ChildItem "content\writeups\hackthebox\*.md" -Exclude "_index.md"
$totalFiles = $htbFiles.Count
$processedFiles = 0

foreach ($file in $htbFiles) {
    $processedFiles++
    Write-Host "`nProcessing ($processedFiles/$totalFiles): $($file.Name)" -ForegroundColor Cyan
    Fix-DateFormat -FilePath $file.FullName
}

Write-Host "`nDate format fixing completed!" -ForegroundColor Green
Write-Host "Processed $processedFiles files." -ForegroundColor Green
