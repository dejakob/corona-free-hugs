const React = require("react");
const {
  H1,
  H2,
  Main,
  Section,
  Input,
  Label,
  Checkbox,
  Button,
  Footer,
  Grid,
  GridCell,
  P
} = require("react-alegrify-ui");

const Head = require("../components/head");
const Body = require("../components/body");
const HUG_TYPES = require("../config/hug-types");

function Create() {
  const title = "Create coronafree hug";
  return (
    <html lang="en" dir="ltr">
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
      <Body
        style={{
          backgroundImage: "url(./smiling-woman-hugging.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "100vw",
            overflowX: "hidden",
            overflowY: "scroll",
            "-webkit-overflow-scrolling": "touch"
          }}
        >
          <Main>
            <section
              style={{ padding: "30vh 0 20vh 0" }}
              className="alegrify-align-text--center"
            >
              <H1 className="alegrify-align-text--center">{title}</H1>
              <div className="alegrify-space--extra-large" style={{ maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                <P spaceL>
                  If you watched the news recently, you might have noticed that
                  the world has changed.
                </P>
                <P>
                  <span role="img" aria-label="Donut">
                    🍩
                  </span>{" "}
                  forget that we&acute;re in this together, so let the people
                  know you care about them by sending a virtual hug
                </P>
              </div>
              <a
                href="#hugger"
                title="Create the hug"
                className="alegrify-button"
                style={{ lineHeight: "44px", textDecoration: "none" }}
              >
                Get started
              </a>
            </section>
            <form
              action="https://us-central1-experiments-248915.cloudfunctions.net/create-hug"
              method="POST"
            >
              <section style={{ padding: "20vh 0" }} id="hugger">
                <Grid all center middle>
                  <GridCell>
                    <figure className="alegrify-avatar" role="presentation">
                      <img
                        src="./icons/user.svg"
                        className="alegrify-avatar__image"
                        alt="alegrify-avatar"
                      />
                    </figure>
                  </GridCell>
                  <GridCell>
                    <Label htmlFor="senderName">
                      Who are you exactly? (the hugger)
                    </Label>
                    <Input name="sender_name" id="senderName" required spaceL />
                  </GridCell>
                </Grid>
              </section>
              <section style={{ padding: "20vh 0" }} id="hugee">
                <Grid all center middle reverse>
                  <GridCell>
                    <figure className="alegrify-avatar" role="presentation">
                      <img
                        src="./icons/user.svg"
                        className="alegrify-avatar__image"
                        alt="alegrify-avatar"
                      />
                    </figure>
                  </GridCell>
                  <GridCell>
                    <Label htmlFor="receiverName">
                      Name of the amazing person you want to hug (the hugee)
                    </Label>
                    <Input name="receiver_name" id="receiverName" required />
                  </GridCell>
                </Grid>
              </section>
              <div style={{ padding: "20vh 0" }}>
                <Section spaceXL>
                  <H2>What kind of hug?</H2>

                  <div className="alegrify-media-selector">
                    <ul className="alegrify-media-selector__list">
                      {HUG_TYPES.map((hug, index) => (
                        <li
                          className="alegrify-media-selector__list-item"
                          key={hug.title}
                        >
                          <input
                            type="radio"
                            name="hug_type"
                            id={`hug_type__${index}`}
                            className="alegrify-media-selector__input"
                            checked={index === 0}
                            value={hug.image}
                          />
                          <figure className="alegrify-media-selector__figure">
                            <img
                              className="alegrify-media-selector__image"
                              src={hug.image}
                              alt={hug.alt}
                              width={hug.width || 300}
                              height={hug.height || 300}
                            />
                          </figure>
                          <label
                            className="alegrify-media-selector__label"
                            htmlFor={`hug_type__${index}`}
                          >
                            <h3>{hug.title}</h3>
                            <p>{hug.content}</p>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <small
                    className="alegrify-space--large"
                    style={{ display: "block" }}
                  >
                    (Gifs provided by{" "}
                    <a
                      href="https://giphy.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="GIPHY: website with many animated gifs"
                      className="alegrify-a"
                    >
                      Giphy.com
                    </a>
                    )
                  </small>
                </Section>
              </div>

              <div style={{ padding: "20vh 0" }}>
                <Section spaceXL>
                  <H2>Can the virtual hug be exchanged for a real hug?</H2>
                  <Checkbox name="exchangable" id="exchangable">
                    By checking this box I acknowledge that this hug can be
                    exchanged for a real and physical hug after the lockdown
                    ends for the countries where either of the involved parties
                    are living in. It is required to show the attached
                    coronafreehug ticket in order to receive the physical hug.
                  </Checkbox>
                </Section>
              </div>

              <div style={{ padding: "20vh 0" }}>
                <Section>
                  <H2>Anything to add?</H2>
                  <Label htmlFor="additionalComments">
                    Add some more text here to personalize the hug
                  </Label>
                  <Input
                    id="additionalComments"
                    name="additional_comments"
                    multiline
                    rows={5}
                    spaceL
                    required
                  />
                  <Button id="submitButton" primary>
                    Generate hug
                  </Button>
                </Section>
              </div>
            </form>
          </Main>
          <Footer className="alegrify-align-text--center">
            Made with ❤ in quarantine
          </Footer>
        </div>
      </Body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        const submitButton = document.querySelector('.alegrify-button--primary');
        const form = document.querySelector('form');
        form.addEventListener('submit', handleSubmit);

        function handleSubmit() {
          submitButton.setAttribute('disabled', 'disabled');
          submitButton.setAttribute('class', 'alegrify-button alegrify-button--primary alegrify-button--loading');
        }
      `
        }}
      />
    </html>
  );
}

module.exports = Create;
