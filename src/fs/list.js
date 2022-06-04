import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = 'files';

const isExist = (path) => {
    return fs.access(path)
        .then(() => true)
        .catch(() => false);
};

export const list = async () => {
    const srcDirPath = path.join(__dirname, srcDir);
    let isDirNotExist = !(await isExist(srcDirPath));

    if (isDirNotExist) {
        throw new Error('FS operation failed');
    }

    let files = await fs.readdir(srcDirPath);
    files.forEach(file => console.log(file));
};