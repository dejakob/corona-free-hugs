/* eslint-disable no-console,no-restricted-syntax,no-await-in-loop,global-require,import/no-dynamic-require */

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

const { renderToStaticMarkup } = require("react-dom/server");

const PAGES_TO_RENDER = ["index", "create"];

(async () => {
  // Create dist folder if not existing
  try {
    await mkdir(path.join(__dirname, "../dist"));
  } catch (ex) {
    console.info("Dist dir already exists");
  }

  for (const page of PAGES_TO_RENDER) {
    try {
      const pageComponent = require(`../site/lib/pages/${page}`);
      const htmlString = renderToStaticMarkup(pageComponent());
      await writeFile(
        path.join(__dirname, `../dist/${page}.html`),
        `<!doctype html>${htmlString}`
      );
    } catch (ex) {
      console.log(`An error occured while rendering ${page}`);
      console.error(ex);
    }
  }
})();
