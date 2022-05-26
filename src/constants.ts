import os from 'os';

export const PWSH_PROFILE_PATH_PROJECT =
    process.cwd() + '\\pwsh-config\\Microsoft.PowerShell_profile.ps1';

export const PWSH_PROFILE_PATH_LOCAL =
    os.homedir() + '\\Documents\\PowerShell\\Microsoft.PowerShell_profile.ps1';

export const FONT_LINK =
    'https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Hack.zip';

export const ZIP_SOURCE = process.cwd() + '\\pwsh-config\\Hack.zip';

export const UNPACKED_FOLDER = process.cwd() + '\\pwsh-config\\Hack';
