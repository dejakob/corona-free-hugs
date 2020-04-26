const React = require("react");
const PropTypes = require("prop-types");
const {
  Body,
  H1,
  H2,
  P,
  Main,
  Section,
  Footer,
  Grid,
  GridCell,
  Button,
  Notification
} = require("react-alegrify-ui");

const Head = require("../components/head");
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
                      <a className="alegrify-a" href="/" title="Corona free hug">
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
        <Footer className="alegrify-align-text--center">
          Made with ❤ in quarantine
        </Footer>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window.location.href.indexOf('created=true') > -1) { showNotification(); }
            if (typeof history !== 'undefined') history.replaceState({}, document.title, window.location.origin + window.location.pathname);
            var copyToClipboardBtn = document.querySelector('.copyToClipboard');
            if (copyToClipboardBtn) copyToClipboardBtn.addEventListener('click', handleCopyToClipboard);
            function showNotification() { document.getElementById('successNotification').style.display = 'block'; }
            function hideNotification() { document.getElementById('successNotification').style.display = 'none'; }
            function handleCopyToClipboard() { try { copyToClipboard(window.location.origin + window.location.pathname); } catch (ex) { alert('Could not access your clipboard. Please copy the full URL (on top of the page)'); } hideNotification(); }
            function copyToClipboard(e){var n,t,o,a;t=e,(n=document.createElement("textArea")).readOnly=!0,n.contentEditable=!0,n.value=t,document.body.appendChild(n),navigator.userAgent.match(/ipad|iphone/i)?((o=document.createRange()).selectNodeContents(n),(a=window.getSelection()).removeAllRanges(),a.addRange(o),n.setSelectionRange(0,999999)):n.select(),document.execCommand("copy"),document.body.removeChild(n)}
        `
          }}
        />
      </Body>
    </html>
  );
}

Hug.propTypes = propTypes;
Hug.defaultProps = defaultProps;

module.exports = Hug;
