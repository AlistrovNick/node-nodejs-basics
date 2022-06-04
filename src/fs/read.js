import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = 'files';
const filename = 'fileToRead.txt';

const isExist = (path) => {
    return fs.access(path)
        .then(() => true)
        .catch(() => false);
};

export const read = async () => {
    const filePath = path.join(__dirname, srcDir, filename);
    let isFileNotExist = !(await isExist(filePath));

    if (isFileNotExist) {
        throw new Error('FS operation failed');
    }

    let data = await fs.readFile(filePath, { encoding: 'utf-8' });
    console.log(data);
};