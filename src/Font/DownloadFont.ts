import download from 'download';
import { FONT_LINK, FOLDER_OF_ZIP } from '../constants';
import OpenFolder from '../service/OpenFolder';

export async function DownloadFont() {
    await download(FONT_LINK, process.cwd() + '\\pwsh-config\\Fonts');

    OpenFolder(FOLDER_OF_ZIP);
}
