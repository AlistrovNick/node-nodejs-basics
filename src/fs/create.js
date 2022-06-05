import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = 'files';
const filename = 'fresh.txt';
const fileData = 'I am fresh and young';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, dirName, filename);

const isFileExist = async (filePath) => {
    return fs.access(filePath)
        .then(() => true)
        .catch(() => false);
}

export const create = async () => {
    let isExist = await isFileExist(filePath);
    if (isExist) {
        throw new Error('FS operation failed');
    } else {
        fs.writeFile(filePath, fileData);
    }
};