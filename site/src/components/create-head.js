const React = require("react");
const PropTypes = require("prop-types");

const Head = require("./head");

function CreateHead({ title }) {
  return (
    <Head title={title}>
      <meta
        name="description"
        content="Quarantine doesn't mean that we can no longer hug each other. Well, physically maybe, but don't worry! Coronafreehug.com can help you send a hug to all your loved ones"
      />
      <meta
        property="og:image"
        content="https://coronafreehug.com/people-hugging.jpg"
      />
    </Head>
  );
}
CreateHead.propTypes = {
  title: PropTypes.string.isRequired
};

module.exports = CreateHead;
