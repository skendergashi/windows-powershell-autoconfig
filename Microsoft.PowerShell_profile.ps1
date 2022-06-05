neofetch

echo "+-------------------------------------------+"
echo "|                                           |"
echo "|           Hallo, Skender!                 |"
echo "|                                           |"
echo "+-------------------------------------------+"
echo ""

oh-my-posh init pwsh --config C:/Users/Skender/AppData/Local/Programs/oh-my-posh/themes/material.omp.json | Invoke-Expression

Import-Module -Name Terminal-Icons
Import-Module -Name PSReadLine

Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -EditMode Windows