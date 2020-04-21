const { execSync } = require("child_process");

const npmRc = `https://registry.npmjs.org/:_authToken=${process.env._NPM_TOKEN}`;

console.log("npm rc", npmRc);

execSync(`echo "${npmRc}" > .npmrc`);
execSync(`npm publish`);

console.log("published");
