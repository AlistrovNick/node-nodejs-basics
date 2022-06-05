import child_process from 'child_process';
import stream from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

const srcDir = 'files';
const srcFile = 'script.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcFilePath = path.join(__dirname, srcDir, srcFile);



export const spawnChildProcess = async (args) => {
    let argsInline = args.join(' ');
    const workerProcess = child_process.exec(`node ${srcFilePath} ${argsInline}`, (error, stdout, stderr) => {
        console.log(stdout);
    });
    
    process.stdin.pipe(workerProcess.stdin);
};