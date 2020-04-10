const React = require("react");

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

module.exports = Body;
