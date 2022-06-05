import path from 'path';
import fs from 'fs/promises';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const srcDir = 'files';
const srcFile = 'fileToCalculateHashFor.txt';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, srcDir, srcFile);

export const calculateHash = async () => {
    let data = await fs.readFile(filePath);
    const hash = createHash('SHA256');
    hash.update(data);
    return hash.digest('hex');
};