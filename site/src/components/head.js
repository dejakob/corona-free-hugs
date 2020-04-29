const fs = require("fs");
const path = require("path");

const React = require("react");
const PropTypes = require("prop-types");

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isAmp: PropTypes.bool
};
const defaultProps = {
  children: null,
  isAmp: false
};

function Head({ title, children, isAmp }) {
  let alegrifyUICss;

  if (isAmp) {
    alegrifyUICss = fs
      .readFileSync(
        path.join(
          __dirname,
          "../../../node_modules/alegrify-ui/alegrify-ui--dark.min.css"
        )
      )
      .toString();
  }

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes"
      />
      <meta
        name="keywords"
        content="COVID-19, Coronavirus, free hugs, hugs, quarantine, lockdown, 2020, social distancing, coronafree"
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="Corona free hug" />
      <meta name="theme-color" content="#4e4cc1" />
      <meta name="msapplication-TileColor" content="#4e4cc1" />
      {children}
      {isAmp ? (
        <style dangerouslySetInnerHTML={{ __html: alegrifyUICss }} />
      ) : (
        <link
          rel="stylesheet"
          href="https://dejakob.com/alegrify-ui/alegrify-ui--dark.css"
        />
      )}
      <title>{title}</title>
    </head>
  );
}

Head.propTypes = propTypes;
Head.defaultProps = defaultProps;

module.exports = Head;
