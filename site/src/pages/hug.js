const React = require("react");
const PropTypes = require("prop-types");
const {
  Body,
  H1,
  H2,
  P,
  Main,
  Section,
  Grid,
  GridCell,
  Button,
  Notification
} = require("react-alegrify-ui");

const Head = require("../components/head");
const Footer = require("../components/footer");
const HUG_TYPES = require("../config/hug-types");

const propTypes = {
  hugType: PropTypes.string.isRequired,
  senderName: PropTypes.string.isRequired,
  receiverName: PropTypes.string.isRequired,
  additionalComments: PropTypes.string.isRequired,
  exchangable: PropTypes.bool
};
const defaultProps = {
  exchangable: false
};

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
      <Head title={title}>
        <meta name="description" content={additionalComments} />
        <meta property="og:description" content={additionalComments} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={alt} />
      </Head>
      <Body>
        <div id="successNotification" style={{ display: "none" }}>
          <Notification success title="You successfully created a hug!" spaceXL>
            <P spaceL>Now it&acute;s time to share this hug!</P>
            <Button className="copyToClipboard" type="button">
              Copy to clipboard
            </Button>
          </Notification>
        </div>
        <Main>
          <H1 className="alegrify-align-text--center">{title}</H1>
          <div style={{ minHeight: "calc(100vh - 194px)" }}>
            <Grid>
              <GridCell six>
                <figure
                  className="alegrify-align-child--center"
                  style={{ backgroundColor: "#111" }}
                >
                  <img
                    src={image}
                    alt={alt}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </figure>
              </GridCell>
              <GridCell six>
                <Section spaceL>
                  <H2>{imageTitle}</H2>
                  <P>{additionalComments}</P>
                </Section>

                {exchangable && (
                  <Section spaceL>
                    <H2>One more thing...</H2>
                    <P>
                      This hug will be exchangable into a real hug when the
                      whole COVID-19 crisis is over.
                    </P>
                  </Section>
                )}

                <Section spaceL>
                  <form action="/create.html?fromhug" method="GET">
                    <H2>Are you in a hugging mood yourself?</H2>
                    <P spaceL>
                      You can use{" "}
                      <a
                        className="alegrify-a"
                        href="/"
                        title="Corona free hug"
                      >
                        coronafreehug.com
                      </a>{" "}
                      yourself to send corona free hugs to pretty much anyone
                      you want. For free!
                    </P>
                    <Button>Create a hug</Button>
                  </form>
                </Section>
              </GridCell>
            </Grid>
          </div>
        </Main>
        <Footer />
        <script src="./hug.js" defer />
      </Body>
    </html>
  );
}

Hug.propTypes = propTypes;
Hug.defaultProps = defaultProps;

module.exports = Hug;
