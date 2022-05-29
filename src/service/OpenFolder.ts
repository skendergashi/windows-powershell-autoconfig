import { exec } from 'child_process';
import { ZIP_SOURCE, FOLDER_OF_ZIP } from '../constants';

export default function OpenFolder(source: string) {
    exec('explorer.exe ' + source);
}
