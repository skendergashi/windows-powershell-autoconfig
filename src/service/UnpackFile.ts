import { exec } from 'child_process';

export default function UnpackFile(source: string) {
    const executeCommand = 'powershell.exe Expand-Archive ' + source;
    exec(executeCommand, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}
