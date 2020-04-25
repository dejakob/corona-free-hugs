const React = require("react");
const PropTypes = require("prop-types");

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
const defaultProps = {
  children: null
};

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
        href="https://dejakob.com/alegrify-ui/alegrify-ui--dark.css"
      />
      <title>{title}</title>
    </head>
  );
}

Head.propTypes = propTypes;
Head.defaultProps = defaultProps;

module.exports = Head;
