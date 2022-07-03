import os from 'os';
import * as dotenv from 'dotenv';

/**
 * The path in the project of the Powershell profile config
 * it is not recommended to change
 */
export const PWSH_PROFILE_PATH_PROJECT =
    process.cwd() + '\\pwsh-config\\Microsoft.PowerShell_profile.ps1';

/**
 * The path at your system of the Powershell profile config
 */
export const PWSH_PROFILE_PATH_LOCAL =
    os.homedir() + '\\Documents\\PowerShell\\Microsoft.PowerShell_profile.ps1';

/**
 * the link of the font ZIP you want to download
 */
export const FONT_LINK =
    'https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Hack.zip';

/**
 * the path of the ZIP
 * the ZIP gets saved in it
 */
export const ZIP_SOURCE = process.cwd() + '\\pwsh-config\\Hack.zip';

/**
 * the path of the unpacked ZIP
 */
export const FOLDER_OF_ZIP = process.cwd() + '\\pwsh-config\\Fonts';

/**
 * @returns the env file
 */
const getGitRemoteLink = (): string => {
    dotenv.config();
    return process.env.GIT_REMOTE_LINK || '';
};

/**
 * The link of the custom git repo
 * Important for forked repos
 */
export const GIT_REMOTE_LINK = getGitRemoteLink();

export const VERSION = '1.1.0';
