import { exec } from 'child_process';

export default function OpenFolder(source: string) {
    exec('explorer.exe ' + source);
}