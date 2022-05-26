import {
    PWSH_PROFILE_PATH_LOCAL,
    PWSH_PROFILE_PATH_PROJECT,
} from './constants';
import { CopyConfigFile } from './Config/CopyConfigFile';

CopyConfigFile(PWSH_PROFILE_PATH_PROJECT, PWSH_PROFILE_PATH_LOCAL);
