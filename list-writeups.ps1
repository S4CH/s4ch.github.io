# Batch Writeup Migration Script
# This script lists all available writeups and provides migration commands

Write-Host "=========================================="
Write-Host "Writeup Migration Helper"
Write-Host "=========================================="

# Function to list machines from a platform
function Get-Machines {
    param([string]$Platform, [string]$GitPath)
    
    Write-Host "`n$Platform Machines:"
    Write-Host "-------------------"
    
    try {
        $Machines = git show "origin/main-old:$GitPath/" --name-only 2>$null | Where-Object { $_ -notmatch "\.(yml|yaml|md)$" -and $_ -ne "" }
        $Count = 0
        foreach ($Machine in $Machines) {
            $Count++
            Write-Host "$Count. $Machine"
        }
        
        if ($Count -eq 0) {
            Write-Host "No machines found."
        } else {
            Write-Host "`nTotal: $Count machines"
        }
    } catch {
        Write-Host "Error listing machines: $_"
    }
}

# List HackTheBox machines
Get-Machines -Platform "HackTheBox" -GitPath "writeups/HackTheBox"

# List TryHackMe machines  
Get-Machines -Platform "TryHackMe" -GitPath "writeups/Tryhackme"

Write-Host "`n=========================================="
Write-Host "Migration Commands:"
Write-Host "=========================================="
Write-Host ""
Write-Host "To migrate a HackTheBox machine:"
Write-Host ".\migrate-writeup.ps1 -Platform hackthebox -MachineName [MachineName]"
Write-Host ""
Write-Host "To migrate a TryHackMe machine:"
Write-Host ".\migrate-writeup.ps1 -Platform tryhackme -MachineName [MachineName]"
Write-Host ""
Write-Host "Add -DryRun to test without extracting files."
Write-Host ""
Write-Host "Examples:"
Write-Host ".\migrate-writeup.ps1 -Platform hackthebox -MachineName Academy"
Write-Host ".\migrate-writeup.ps1 -Platform tryhackme -MachineName Blue -DryRun"
Write-Host ""

# Show current progress
Write-Host "=========================================="
Write-Host "Current Progress:"
Write-Host "=========================================="

$HtbFiles = Get-ChildItem "content/writeups/hackthebox/*.md" -ErrorAction SilentlyContinue
$ThmFiles = Get-ChildItem "content/writeups/tryhackme/*.md" -ErrorAction SilentlyContinue

Write-Host "HackTheBox writeups migrated: $($HtbFiles.Count)"
if ($HtbFiles) {
    foreach ($File in $HtbFiles) {
        Write-Host "  - $($File.BaseName)"
    }
}

Write-Host "`nTryHackMe writeups migrated: $($ThmFiles.Count)" 
if ($ThmFiles) {
    foreach ($File in $ThmFiles) {
        Write-Host "  - $($File.BaseName)"
    }
}

Write-Host "`nTotal migrated: $($HtbFiles.Count + $ThmFiles.Count)"
