const React = require("react");
const PropTypes = require("prop-types");
const { Avatar, Grid, GridCell, Input, Label } = require("react-alegrify-ui");

function CreatePersonInput({ alt, id, name, label, reverse }) {
  return (
    <Grid all center middle reverse={reverse}>
      <GridCell>
        <Avatar image="./icons/user.svg" alt={alt} l />
      </GridCell>
      <GridCell>
        <Label htmlFor={id}>{label}</Label>
        <Input name={name} id={id} required spaceL />
      </GridCell>
    </Grid>
  );
}
CreatePersonInput.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};
CreatePersonInput.defaultProps = {
  reverse: false
};

module.exports = CreatePersonInput;
