import { copyFile, existsSync, mkdirSync } from 'fs';
import os from 'os';

/**
 * @param source the source of the file which should get copied
 * @param destination the destination of the file which should get copied
 */
export async function CopyConfigFile(source: string, destination: string) {
    try {
        if (!existsSync(os.homedir() + '\\Documents\\PowerShell')) {
            mkdirSync(os.homedir() + '\\Documents\\PowerShell');
        }
        copyFile(source, destination, (err) => {
            if (err) console.log(err);
        });
    } catch (e: any) {
        console.log('WARNING: Something went wrong: ' + e);
    }
}
