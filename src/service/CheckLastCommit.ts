import { exec } from 'child_process';
import { GIT_BRANCH, GIT_REMOTE_LINK } from '../constants';

let localHash = '';
let remoteHash = '';

/**
 * sets the local hash
 * @param payload output of the command
 */
function setLocalHash(payload: string) {
    console.log(payload);
    localHash = payload.substring(0, 40);
}

/**
 * sets the remote hash
 * @param payload output of the command
 */
function setRemoteHash(payload: string) {
    console.log(payload);
    remoteHash = payload.substring(0, 40);
}

/**
 * Creates the hashes and passes them into
 * the corresponding functions
 */
async function createHashes() {
    await exec('git rev-parse HEAD', async (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        setLocalHash(stdout);
    });

    await exec(
        `git ls-remote ${GIT_REMOTE_LINK} ${GIT_BRANCH}`,
        async (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            setRemoteHash(stdout);
        }
    );
}

/**
 * Checks if the local git repo is up to date
 * @returns true if so, false if not
 */
export async function isUpdated() {
    await createHashes();
    setTimeout(() => {
        return;
    }, 1000);

    // THIS STATEMENT DOES NOT WORK
    return localHash === remoteHash ? false : true;
}

export async function pull() {
    exec('git pull');
}
