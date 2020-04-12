const React = require("react");
const { Button, H1, Main, Section, P } = require("react-alegrify-ui");

const Head = require("../components/head");
const Body = require("../components/body");

/**
 *
 */
function IndexPage() {
  const title = "Coronafree hug";
  return (
    <>
      <html lang="en">
        <Head title={title}>
          <meta
            name="description"
            content="Quarantine doesn't mean that we can no longer hug each other. Well, physically maybe, but don't worry! Coronafreehug.com can help you send a hug to all your loved ones"
          />
          <meta
            property="og:image"
            content="https://coronafreehug.com/people-hugging.jpg"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .body--backdrop:before {
                background: rgba(0,0,0,0.6);
                display: block;
                content: '';
                height: 100%;
                width: 100%;
                position: absolute;
              }
                    `
            }}
          />
        </Head>
        <Body
          style={{
            backgroundImage: "url(./people-hugging.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            minHeight: "100vh"
          }}
          className="alegrify-align-child--middle body--backdrop"
        >
          <Main>
            <form action="./create.html" method="GET">
              <H1
                className="alegrify-align-text--center"
                style={{ color: "white", textShadow: "2px 2px 4px #333" }}
              >
                {title}
              </H1>
              <Section spaceXL>
                <div className="alegrify-space--large">
                  <P spaceL>
                    If you watched the news recently, you might have noticed
                    that the world has changed.
                  </P>
                  <P>
                    <span role="img" aria-label="Donut">
                      🍩
                    </span>{" "}
                    forget that we&acute;re in this together, so let the people
                    know you care about them by sending a virtual hug
                  </P>
                </div>
                <Button primary>Send coronafree hug</Button>
              </Section>
            </form>
          </Main>
        </Body>
      </html>
    </>
  );
}

module.exports = IndexPage;
