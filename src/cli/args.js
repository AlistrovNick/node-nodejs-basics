export const parseArgs = () => {
    let vars = process.argv.slice(2);
    let args = [];
    for (let i = 0; i < vars.length; i += 2) {
        let propName = vars[i].replace('--', '');
        args.push(`${propName} is ${vars[i + 1]}`);
    }
    console.log(args.join(', '));
};