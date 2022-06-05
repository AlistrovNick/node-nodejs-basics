import { Transform } from 'stream';

export const transform = async () => {
    const transformStream = new Transform({
        transform(chunck, encoding, callback) {
            let data = chunck.toString().replace('\n', '');
            data = data.split('').reverse().join('') + '\n';
            callback(null, data);
        }
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};