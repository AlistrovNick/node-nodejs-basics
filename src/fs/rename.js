import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcFilename = 'wrongFilename.txt';
const destFilename = 'properFilename.md';

const isExist = (path) => {
    return fs.access(path)
        .then(() => true)
        .catch(() => false);
};

export const rename = async () => {
    const srcFilePath = path.join(__dirname, srcFilename);
    const destFilePath = path.join(__dirname, destFilename);

    let isSrcExist = await isExist(srcFilePath);
    let isDestExist = await isExist(destFilePath);

    if (!isSrcExist || isDestExist) {
        throw new Error('FS operation failed');
    }
    fs.rename(srcFilePath, destFilePath);
};