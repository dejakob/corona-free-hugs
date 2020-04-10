const React = require("react");
const { H1, H2, Main, Section, Footer } = require("react-alegrify-ui");

const Head = require("../components/head");
const Body = require("../components/body");
const HUG_TYPES = require("../config/hug-types");

function Hug({ hugType, senderName, receiverName, additionalComments }) {
  const { title: imageTitle, image, alt } = HUG_TYPES.find(
    ht => ht.image === hugType
  );

  if (!image) {
    throw new Error("hug type not found");
  }

  const title = `${receiverName}, ${senderName} sent you a coronafree hug!`;

  return (
    <html lang="en">
      <Head title={title} />
      <Body>
        <H1>{title}</H1>
        <Main>
          <img src={image} alt={alt} />
          <Section>
            <H2>{imageTitle}</H2>
            <P>{additionalComments}</P>
          </Section>
        </Main>
      </Body>
      <Footer className="alegrify-align-text--center">
        Made with ❤ in quarantine
      </Footer>
    </html>
  );
}

module.exports = Hug;
