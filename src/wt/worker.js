import { parentPort } from 'worker_threads';

let result = null;
parentPort.once('message', n => {
    result = nthFibonacci(n);
    sendResult();
});

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    parentPort.postMessage(result);
};