#!/usr/bin/env pwsh

# Script to clean up all migration and conversion scripts before committing

Write-Host "🧹 Cleaning up migration and conversion scripts..." -ForegroundColor Green

# List of all script files to remove
$scriptsToRemove = @(
    "test-function.ps1",
    "migrate-all-writeups.ps1",
    "migrate-all-writeups-improved.ps1", 
    "migrate-all-writeups-fixed.ps1",
    "migrate-all-writeups-final.ps1",
    "list-writeups.ps1",
    "docusaurus-to-hugo.ps1",
    "migrate-writeup.ps1",
    "debug-files.ps1",
    "convert-all-htb.ps1",
    "TRANSFORMATION-DEMO.md"
)

$removedCount = 0
$notFoundCount = 0

foreach ($script in $scriptsToRemove) {
    if (Test-Path $script) {
        Remove-Item $script -Force
        Write-Host "✅ Removed: $script" -ForegroundColor Green
        $removedCount++
    } else {
        Write-Host "⚠️  Not found: $script" -ForegroundColor Yellow
        $notFoundCount++
    }
}

Write-Host "`n📊 Cleanup Summary:" -ForegroundColor Cyan
Write-Host "   Files removed: $removedCount" -ForegroundColor Green
Write-Host "   Files not found: $notFoundCount" -ForegroundColor Yellow

# Verify final state
Write-Host "`n🔍 Verifying clean state..." -ForegroundColor Cyan

$remainingScripts = Get-ChildItem "*.ps1" -ErrorAction SilentlyContinue
if ($remainingScripts) {
    Write-Host "⚠️  Warning: Some PowerShell scripts still exist:" -ForegroundColor Yellow
    $remainingScripts | ForEach-Object { Write-Host "   - $($_.Name)" -ForegroundColor Yellow }
} else {
    Write-Host "✅ No PowerShell scripts remaining" -ForegroundColor Green
}

# Check for any temp files
$tempFiles = Get-ChildItem "temp-*" -ErrorAction SilentlyContinue
if ($tempFiles) {
    Write-Host "⚠️  Warning: Temporary files found:" -ForegroundColor Yellow
    $tempFiles | ForEach-Object { 
        Write-Host "   - $($_.Name)" -ForegroundColor Yellow
        Remove-Item $_.FullName -Force
        Write-Host "     Removed." -ForegroundColor Green
    }
} else {
    Write-Host "✅ No temporary files found" -ForegroundColor Green
}

Write-Host "`n🎉 Cleanup completed! Repository is ready for commit." -ForegroundColor Green
