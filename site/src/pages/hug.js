const React = require("react");
const {
  H1,
  H2,
  P,
  Main,
  Section,
  Footer,
  Grid,
  GridCell,
  Button
} = require("react-alegrify-ui");

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
          <div style={{ minHeight: "calc(100vh - 194px)" }}>
            <Grid>
              <GridCell six>
                <figure
                  className="alegrify-align-child--center"
                  style={{ backgroundColor: "#111" }}
                >
                  <img src={image} alt={alt} />
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
                      <a href="/" title="Corona free hug">
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
      </Body>
      <Footer className="alegrify-align-text--center">
        Made with ❤ in quarantine
      </Footer>
    </html>
  );
}

module.exports = Hug;
