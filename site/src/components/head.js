const React = require("react");

function Head({ title }) {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://dejakob.com/alegrify-ui/alegrify-ui--article.css"
      />
      <title>{title}</title>

      <style
        dangerouslySetInnerHTML={{
          __html: `
.body--backdrop:before {
  background: rgba(0,0,0,0.6);
  display: block;
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
}
      `
        }}
      />
    </head>
  );
}

module.exports = Head;
