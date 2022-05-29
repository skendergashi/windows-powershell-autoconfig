import * as readline from 'readline';
import { DownloadFont } from './Font/DownloadFont';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * the main function
 */
function main() {
    console.log('\n' + '#####################################' + '\n');
    console.log('Initializing the POSH-Theme...');
    console.log('\n' + '\n' + 'At first, you need a font. ');
    askForDownload();

    console.log('If you wish to continue, press any key...');
    pressAnyKey();
}


/**
 * Asks the user wether he wants to download the suggested font.
 * The suggested font can be found at /src/constants.ts => FONT_LINK
 */
async function askForDownload() {
    rl.resume();
    rl.question(
        '\n' + 'Do you want to download the suggested font? (y/n)',
        async (answer) => {
            if (answer === 'y') {
                console.log('Downloading...');
                await DownloadFont();
                console.log(
                    '\n' +
                        'Now, the file explorer should be open. Install the fonts.'
                );
            }
        }
    );
}

/**
 * Waits for keyboard input to proceed with the process.
 */
async function pressAnyKey() {
    rl.resume();
    rl.question('', async (answer) => {
        while (answer === undefined) {
            0; /*NOP*/
        }
        rl.pause();
    });
}

main();
