const { exec } = require('child_process');

exec(`NPM_TOKEN=${process.env._NPM_TOKEN} npm publish`);