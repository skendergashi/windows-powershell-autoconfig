import * as readline from 'readline';
import { CopyConfigFile } from './Config/CopyConfigFile';
import {
    PWSH_PROFILE_PATH_LOCAL,
    PWSH_PROFILE_PATH_PROJECT,
} from './constants';
import { DownloadFont } from './Font/DownloadFont';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * the main function
 * @param downloadFont OPTIONAL: if download is false, it won't download the font
 */
export function main(downloadFont?: boolean) {
    console.log('\n' + '#####################################' + '\n');
    console.log('Initializing the POSH-Theme...');
    if (downloadFont || downloadFont === undefined) {
        startDownload();
    }

    CopyConfigFile(PWSH_PROFILE_PATH_PROJECT, PWSH_PROFILE_PATH_LOCAL);

    console.log('\n' + 'Config files got copied!');
    console.log('\n' + 'Now, just restart your computer!' + '\n');
    process.exit();
}

/**
 * Asks the user wether he wants to download the suggested font.
 * The suggested font can be found at /src/constants.ts => FONT_LINK
 */
async function startDownload() {
    console.log('Downloading...');
    await DownloadFont();
    console.log(
        '\n' + 'Now, the file explorer should be open. Install the fonts.'
    );
}
