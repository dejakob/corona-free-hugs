const React = require("react");

const CreatePage = require("./create");

/**
 *
 */
function IndexPage(props) {
  // Also create create.html, for legacy reasons
  /* eslint-disable react/jsx-props-no-spreading */
  return <CreatePage {...props} />;
}

module.exports = IndexPage;
