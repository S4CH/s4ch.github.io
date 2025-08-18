#!/usr/bin/env pwsh

# Script to copy HackTheBox images to Hugo static directory structure

$htbImages = Get-ChildItem "static\img\HackTheBox\*.png"

foreach ($image in $htbImages) {
    $machineName = [System.IO.Path]::GetFileNameWithoutExtension($image.Name)
    $targetDir = "static\writeups\hackthebox\$machineName"
    
    # Create target directory if it doesn't exist
    if (!(Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        Write-Host "Created directory: $targetDir"
    }
    
    # Copy the image
    $targetPath = "$targetDir\$($image.Name)"
    Copy-Item $image.FullName $targetPath -Force
    Write-Host "Copied $($image.Name) to $targetPath"
}

Write-Host "All HackTheBox images copied successfully!"
