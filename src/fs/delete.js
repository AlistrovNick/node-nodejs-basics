import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = 'files';
const filename = 'fileToRemove.txt';

const isExist = (path) => {
    return fs.access(path)
        .then(() => true)
        .catch(() => false);
};

export const remove = async () => {
    const filePath = path.join(__dirname, srcDir, filename);
    let isFileNotExist = !(await isExist(filePath));

    if (isFileNotExist) {
        throw new Error('FS operation failed');
    }
    fs.unlink(filePath);
};