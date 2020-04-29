const React = require("react");
const PropTypes = require("prop-types");

function CreateForm({ children, isAmp }) {
  return (
    <form
      id="createForm"
      method={isAmp ? "GET" : "POST"}
      action="https://us-central1-experiments-248915.cloudfunctions.net/create-hug"
      target="_top"
    >
      {children}
    </form>
  );
}

CreateForm.propTypes = {
  children: PropTypes.node.isRequired,
  isAmp: PropTypes.bool
};
CreateForm.defaultProps = {
  isAmp: false
};

module.exports = CreateForm;
