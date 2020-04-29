const React = require("react");
const PropTypes = require("prop-types");
const { H1, P, Section } = require("react-alegrify-ui");

function CreateWelcome({ title }) {
  return (
    <Section large plain textCenter>
      <H1>{title}</H1>
      <P welcome spaceL>
        If you watched the news recently, you might have noticed that the world
        has changed.
      </P>
      <div className="alegrify-space--extra-large">
        <P welcome>
          <span role="img" aria-label="Donut">
            🍩
          </span>{" "}
          forget that we&acute;re in this together, so let the people know you
          care about them by sending a virtual hug
        </P>
      </div>
      <a
        href="#createForm"
        title="Create the hug"
        className="alegrify-button"
        style={{ lineHeight: "44px", textDecoration: "none" }}
      >
        Get started
      </a>
    </Section>
  );
}
CreateWelcome.propTypes = {
  title: PropTypes.string.isRequired
};

module.exports = CreateWelcome;
