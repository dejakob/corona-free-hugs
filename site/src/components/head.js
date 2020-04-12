const React = require("react");

function Head({ title, children }) {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="Corona free hug" />
      <meta name="theme-color" content="#4e4cc1" />
      {children}
      <link
        rel="stylesheet"
        href="https://dejakob.com/alegrify-ui/alegrify-ui.css"
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
