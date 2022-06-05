import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const srcDir = 'files';
const srcFile = 'fileToWrite.txt';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, srcDir, srcFile);

export const write = async () => {
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};