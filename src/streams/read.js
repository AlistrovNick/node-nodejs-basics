import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const srcDir = 'files';
const srcFile = 'fileToRead.txt';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, srcDir, srcFile);

export const read = async () => {
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(process.stdout);
};