const React = require("react");
const PropTypes = require("prop-types");

function CreateForm({ children }) {
  return (
    <form
      id="createForm"
      action="https://us-central1-experiments-248915.cloudfunctions.net/create-hug"
      method="POST"
    >
      {children}
    </form>
  );
}

CreateForm.propTypes = {
  children: PropTypes.node.isRequired
};

module.exports = CreateForm;
