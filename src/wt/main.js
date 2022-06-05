import { fileURLToPath } from 'url';
import path, { resolve } from 'path';
import { Worker } from 'worker_threads';

const workerFile = 'worker.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerFilePath = path.join(__dirname, workerFile);

export const performCalculations = async () => {
    let countWorkers = process.env.NUMBER_OF_PROCESSORS;
    let workers = [];
    for (let i = 0; i < countWorkers; i++) {
        let workerPromise = new Promise((resolve, reject) => {
            let workerResult = {};
            const worker = new Worker(workerFilePath);
            worker.once('message', (message) => {
                workerResult.status = 'resolved';
                workerResult.data = message;
                resolve(workerResult);
            });
            worker.once('error', () => {
                workerResult.status = 'error';
                workerResult.data = null;
                resolve(workerResult);
            })
            worker.postMessage(10 + i);
        });
        workers.push(workerPromise);
    }
    return Promise.all(workers);
};