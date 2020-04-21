const { execSync } = require("child_process");

execSync(`export NPM_TOKEN="${process.env._NPM_TOKEN}" npm publish`);

console.log("published");
