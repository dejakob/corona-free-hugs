const React = require("react");
const {
  Body,
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
  P,
  MediaSelector,
  MediaSelectorItem
} = require("react-alegrify-ui");

const Head = require("../components/head");
const HUG_TYPES = require("../config/hug-types");

function Create() {
  const title = "Share coronafree hug";
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
      <Body backgroundImage="./smiling-woman-hugging.jpg">
        <Main>
          <Section large plain textCenter>
            <H1>{title}</H1>
            <div
              className="alegrify-space--extra-large"
              style={{
                maxWidth: "432px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <P spaceL>
                If you watched the news recently, you might have noticed that
                the world has changed.
              </P>
              <P>
                <span role="img" aria-label="Donut">
                  🍩
                </span>{" "}
                forget that we&acute;re in this together, so let the people know
                you care about them by sending a virtual hug
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
          </Section>
          <form
            action="https://us-central1-experiments-248915.cloudfunctions.net/create-hug"
            method="POST"
          >
            <Section large plain id="hugger">
              <Grid all center middle>
                <GridCell>
                  <figure className="alegrify-avatar" role="presentation">
                    <img
                      src="./icons/user.svg"
                      className="alegrify-avatar__image"
                      alt="alegrify avatar"
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
            </Section>
            <Section large plain id="hugee">
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
            </Section>
            <Section large>
              <H2>What kind of hug?</H2>

              <MediaSelector>
                {HUG_TYPES.map((hug, index) => (
                  <MediaSelectorItem
                    key={hug.title}
                    name="hug_type"
                    checked={index === 0}
                    value={hug.image}
                    image={hug.image}
                    alt={hug.alt}
                    width={hug.width || 300}
                    height={hug.height || 300}
                    title={hug.title}
                    description={hug.content}
                  />
                ))}
              </MediaSelector>

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

            <Section large>
              <H2>Can the virtual hug be exchanged for a real hug?</H2>
              <Checkbox name="exchangable" id="exchangable">
                By checking this box I acknowledge that this hug can be
                exchanged for a real and physical hug after the lockdown ends
                for the countries where either of the involved parties are
                living in. It is required to show the attached coronafreehug
                ticket in order to receive the physical hug.
              </Checkbox>
            </Section>

            <Section large>
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
          </form>
        </Main>
        <Footer className="alegrify-align-text--center">
          Made with ❤ in quarantine
        </Footer>
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
