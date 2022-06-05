import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const srcDir = 'files';
const destDir = 'files_copy';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isExist = (path) => {
    return fs.access(path)
        .then(() => true)
        .catch(() => false);
};

export const copy = async () => {
    const srcDirPath = path.join(__dirname, srcDir);
    const destDirPath = path.join(__dirname, destDir);
    let isSrcExist = await isExist(srcDirPath);
    let isDestExist = await isExist(destDirPath);

    if (!isSrcExist || isDestExist) {
        throw new Error('FS operation failed');
    }
    await fs.mkdir(destDirPath);
    let files = await fs.readdir(srcDirPath);
    for (const file of files) {
        let srcFilePath = path.join(srcDirPath, file);
        let destFilePath = path.join(destDirPath, file);
        fs.copyFile(srcFilePath, destFilePath);
    }
};