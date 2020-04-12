const React = require("react");
const PropTypes = require("prop-types");

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  // eslint-disable-next-line
  style: PropTypes.object
};
const defaultProps = {
  className: undefined,
  style: null
};

function Body({ children, className, style }) {
  return (
    <body
      className={`alegrify-body${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </body>
  );
}

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

module.exports = Body;
