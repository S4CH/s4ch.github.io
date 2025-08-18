# Writeup Migration Script for Hugo
# This script helps migrate writeups from the old branch to Hugo format

param(
    [string]$Platform = "hackthebox",  # hackthebox or tryhackme
    [string]$MachineName,
    [switch]$DryRun = $false
)

if (-not $MachineName) {
    Write-Host "Usage: .\migrate-writeup.ps1 -Platform [hackthebox|tryhackme] -MachineName [name] [-DryRun]"
    Write-Host "Example: .\migrate-writeup.ps1 -Platform hackthebox -MachineName Academy"
    exit 1
}

$SourcePath = if ($Platform -eq "hackthebox") { "writeups/HackTheBox" } else { "writeups/Tryhackme" }
$TargetDir = "content/writeups/$Platform"

# Check if machine exists in old branch
$CheckCommand = "git show origin/main-old:$SourcePath/$MachineName/ 2>&1"
$CheckResult = Invoke-Expression $CheckCommand

if ($CheckResult -like "*does not exist*") {
    Write-Host "Machine '$MachineName' not found in $Platform. Available machines:"
    $ListCommand = "git show origin/main-old:$SourcePath/ --name-only"
    Invoke-Expression $ListCommand
    exit 1
}

# Find the writeup file
$WriteupFiles = @()
try {
    $Files = git show "origin/main-old:$SourcePath/$MachineName/" --name-only 2>$null
    foreach ($File in $Files) {
        if ($File -match "\.(md|markdown)$") {
            $WriteupFiles += $File
        }
    }
} catch {
    Write-Host "Error reading machine directory: $_"
    exit 1
}

if ($WriteupFiles.Count -eq 0) {
    Write-Host "No markdown files found for $MachineName"
    exit 1
}

$WriteupFile = $WriteupFiles[0]  # Use the first markdown file found
$SourceFile = "$SourcePath/$MachineName/$WriteupFile"

Write-Host "Found writeup: $SourceFile"

if ($DryRun) {
    Write-Host "[DRY RUN] Would migrate $SourceFile to $TargetDir/$($MachineName.ToLower()).md"
    exit 0
}

# Extract the content
$TempFile = "temp_$($MachineName.ToLower()).md"
git show "origin/main-old:$SourceFile" > $TempFile

Write-Host "Extracted content to $TempFile"
Write-Host "Manual conversion required. Please:"
Write-Host "1. Review the content in $TempFile"
Write-Host "2. Convert to Hugo format using the writeup archetype"
Write-Host "3. Place in $TargetDir/$($MachineName.ToLower()).md"
Write-Host "4. Remove $TempFile when done"

Write-Host "`nExample command to create from archetype:"
Write-Host "hugo new writeups/$Platform/$($MachineName.ToLower()).md --kind writeup"
