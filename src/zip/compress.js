import zlib from 'zlib';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const srcDir = 'files';
const srcFile = 'fileToCompress.txt';
const archiveFile = 'archive.gz';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, srcDir, srcFile);
const archivePath = path.join(__dirname, srcDir, archiveFile);

export const compress = async () => {
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(archivePath);
    const zip = zlib.createGzip();
    readStream.pipe(zip).pipe(writeStream);
};