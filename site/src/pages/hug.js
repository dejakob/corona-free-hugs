const React = require("react");
const { H1, H2, P, Main, Section, Footer } = require("react-alegrify-ui");

const Head = require("../components/head");
const Body = require("../components/body");
const HUG_TYPES = require("../config/hug-types");

function Hug({
  hugType,
  senderName,
  receiverName,
  additionalComments,
  exchangable
}) {
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
        <H1 className="alegrify-align-text--center">{title}</H1>
        <Main>
          <div className="alegrify-space--extra-large alegrify-align-child--center">
            <img src={image} alt={alt} />
          </div>
          <Section spaceXL={exchangable}>
            <H2>{imageTitle}</H2>
            <P>{additionalComments}</P>
          </Section>
          {exchangable && (
            <Section>
              <H2>One more thing...</H2>
              <P>
                This hug will be exchangable into a real hug when the whole
                COVID-19 crisis is over.
              </P>
            </Section>
          )}
        </Main>
      </Body>
      <Footer className="alegrify-align-text--center">
        Made with ❤ in quarantine
      </Footer>
    </html>
  );
}

module.exports = Hug;
