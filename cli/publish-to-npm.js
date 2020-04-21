const { execSync } = require('child_process');

execSync(`NPM_TOKEN=${process.env._NPM_TOKEN} npm publish`);