export const parseEnv = () => {
    let vars = process.env;
    for (const prop in vars) {
        console.log(`RSS_${prop}=${vars[prop]}`);
    }
};