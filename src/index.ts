import { CopyConfigFile } from './Config/CopyConfigFile';
import {
    PWSH_PROFILE_PATH_LOCAL,
    PWSH_PROFILE_PATH_PROJECT,
} from './constants';

export async function main() {
    console.log('\n' + '#####################################' + '\n');
    console.log('Initializing the POSH-Theme...');

    await CopyConfigFile(PWSH_PROFILE_PATH_PROJECT, PWSH_PROFILE_PATH_LOCAL);

    console.log('\n' + 'Config files got copied! ');
    console.log('\n' + 'Now, just restart your shell!' + '\n');
    process.exit();
}

main();
