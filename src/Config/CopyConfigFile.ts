import { copyFile } from 'fs';

/**
 * @param source the source of the file which should get copied
 * @param destination the destination of the file which should get copied
 */
export function CopyConfigFile(source: string, destination: string) {
    try {
        copyFile(source, destination, (err) => {
            console.log(err);
        });
    } catch (e: any) {
        console.log('WARNING: Something went wrong: ' + e);
    }
}
