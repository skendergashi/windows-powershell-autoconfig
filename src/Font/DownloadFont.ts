import download from 'download';
import { FONT_LINK } from '../constants';
import OpenFolder from '../service/OpenFolder';

async function DownloadFonts() {
    await download(FONT_LINK, process.cwd() + '\\pwsh-config\\Fonts');

    OpenFolder(process.cwd() + '/pwsh-config/Fonts');
}

DownloadFonts();
