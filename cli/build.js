const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

const { renderToStaticMarkup } = require("react-dom/server");

const indexPageComponent = require("../site/lib/pages");
const createPageComponent = require("../site/lib/pages/create");

(async () => {
  // Create dist folder if not existing
  try {
    await mkdir(path.join(__dirname, "../dist"));
  } catch (ex) {
    console.info("Dist dir already exists");
  }

  // Output index contents
  try {
    const htmlString = renderToStaticMarkup(indexPageComponent());
    await writeFile(path.join(__dirname, "../dist/index.html"), `<!doctype html>${htmlString}`);
  } catch (ex) {
    console.error(ex);
  }

  // Output create page
  try {
    const htmlString = renderToStaticMarkup(createPageComponent());
    await writeFile(path.join(__dirname, "../dist/create.html"), `<!doctype html>${htmlString}`);
  } catch (ex) {
    console.error(ex);
  }
})();
