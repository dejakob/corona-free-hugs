const React = require("react");
const {
  Footer,
  Grid,
  GridCell,
  Dl,
  Dt,
  Dd,
  Notification,
  P,
  Button
} = require("react-alegrify-ui");

function FooterWithContent() {
  return (
    <Footer>
      <div className="alegrify-main">
        <Grid>
          <GridCell three textCenter>
            <Dl>
              <Dt>Made with</Dt>
              <Dd>❤ in quarantine</Dd>
              <Dt>Contribute</Dt>
              <Dd>
                <a
                  className="alegrify-a"
                  href="https://github.com/dejakob/corona-free-hugs"
                  title="Check out the repo on GitHub"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Fork on GitHub
                </a>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Built with</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://dejakob.com/react-alegrify-ui"
                    title="React implementation of Alegrify UI"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    React Alegrify UI
                  </a>
                </div>
                <div>
                  <a
                    className="alegrify-a"
                    href="https://github.com/tabler/tabler-icons"
                    title="Tabler icons on GitHub"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Tabler icons
                  </a>
                </div>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Get in touch</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://m.me/dejakob"
                    title="Send Message on FB messenger"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Messenger
                  </a>
                </div>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://github.com/dejakob"
                    title="Me on GitHub and stuff"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    className="alegrify-a"
                    href="https://twitter.com/dejakob"
                    title="Tweeting bird platform"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Twitter
                  </a>
                </div>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Other projects</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://alegrify.com"
                    title="Your personal guide to a happier lifestyle"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Alegrify
                  </a>
                </div>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://expat.barcelona"
                    title="Expat life in Barcelona"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Expat.barcelona
                  </a>
                </div>
              </Dd>
            </Dl>
          </GridCell>
        </Grid>
      </div>
      <script src="./analytics.js" defer />

      <div
        id="cookieBanner"
        role="banner"
        style={{
          position: "absolute",
          zIndex: "3",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.9)",
          display: "none",
          alignItems: "flex-end",
          justifyContent: "flex-end"
        }}
        aria-hidden="true"
      >
        <Notification info title="This website uses cookies">
          <P spaceL>
            Your browser might store cookies when you&acute;re using this site,
            mainly related to the usage of 3rd party services.
          </P>
          <Button primary type="button">
            Got it
          </Button>
        </Notification>
      </div>
    </Footer>
  );
}

module.exports = FooterWithContent;
