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

      const ampVersion = renderToStaticMarkup(pageComponent({ isAmp: true }))
        // Add AMP attribute
        .replace("<html", "<html ⚡")

        // Strip all script tags
        .replace(
          /<script(?:(?!\/\/)(?!\/\*)[^'"]|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/.*(?:\n)|\/\*(?:(?:.|\s))*?\*\/)*?<\/script>/gi,
          ""
        )

        // <img becomes <amp-img
        .replace(/<img/gi, "<amp-img")

        // loading="lazy" is not supported
        .replace(/loading="lazy"/gi, "")

        // amp-custom for all style tags
        .replace(/<style/gi, "<style amp-custom")

        // Add required AMP scripts and LINK tags to head
        .replace(
          "</head>",
          '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript><script async src="https://cdn.ampproject.org/v0.js"></script><script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script></head>'
        );
      await writeFile(
        path.join(__dirname, `../dist/${page}--amp.html`),
        `<!doctype html>${ampVersion}`
      );
    } catch (ex) {
      console.log(`An error occured while rendering ${page}`);
      console.error(ex);
    }
  }
})();
