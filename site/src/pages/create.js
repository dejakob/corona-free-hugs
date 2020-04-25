const React = require("react");
const {
  H1,
  H2,
  Main,
  Section,
  Input,
  Label,
  Card,
  Checkbox,
  Button,
  Footer,
  Stepper,
  Grid,
  GridCell
} = require("react-alegrify-ui");

const Head = require("../components/head");
const Body = require("../components/body");
const HUG_TYPES = require("../config/hug-types");

const STEPS = [
  "Resolve identity crisis",
  "Finding receiver",
  "Commit copyright infridgement",
  "Figuring out you won't get paid for this"
];

function Create() {
  const title = "Create coronafree hug";
  return (
    <html lang="en">
      <Head title={title}>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />
      </Head>
      <Body
        style={{
          backgroundImage: "url(./smiling-woman-hugging.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
      >
        <Main>
          <section
            style={{ margin: "40vh 0" }}
            className="alegrify-align-text--center"
          >
            <H1 className="alegrify-align-text--center">{title}</H1>
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
            <section style={{ margin: "40vh 0" }} id="hugger">
              <Grid all center middle>
                <GridCell>
                  <figure className="avatar" role="presentation">
                    <img src="/static/icons/user.svg" alt="avatar" />
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
            <section style={{ margin: "40vh 0" }} id="hugee">
              <Grid all center middle reverse>
                <GridCell>
                  <figure className="avatar" role="presentation">
                    <img src="/static/icons/user.svg" alt="avatar" />
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
            <div style={{ margin: "40vh 0" }}>
              <Section spaceXL>
                <H2>What kind of hug?</H2>

                <div className="hug-selector">
                  <ul className="hug-selector__list">
                    {HUG_TYPES.map((hug, index) => (
                      <li className="hug-selector__list-item" key={hug.title}>
                        <input
                          type="radio"
                          name="hug_type"
                          id={`hug_type__${index}`}
                          className="hug-selector__input"
                          checked={index === 0}
                          value={hug.image}
                        />
                        <figure className="hug-selector__figure">
                          <img
                            className="hug-selector__image"
                            src={hug.image}
                            alt={hug.alt}
                            width={hug.width || 300}
                            height={hug.height || 300}
                          />
                        </figure>
                        <label
                          className="hug-selector__label"
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

            <div style={{ margin: "40vh 0" }}>
              <Section spaceXL>
                <H2>Can the virtual hug be exchanged for a real hug?</H2>
                <Checkbox name="exchangable" id="exchangable">
                  By checking this box I acknowledge that this hug can be
                  exchanged for a real and physical hug after the lockdown ends
                  for the countries where either of the involved parties are
                  living in. It is required to show the attached coronafreehug
                  ticket in order to receive the physical hug.
                </Checkbox>
              </Section>
            </div>

            <div style={{ margin: "40vh 0" }}>
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

        {/*
        <section
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            padding: "32px 0 0 0",
            background:
              "linear-gradient(to top, rgba(56, 54, 152, 0), #383698)",
            zIndex: 1
          }}
          aria-hidden="true"
        >
          <div className="alegrify-main">
            <Stepper progress={50} steps={STEPS} />
          </div>
        </section>
        */}
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
