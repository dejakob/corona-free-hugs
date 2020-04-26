const React = require("react");
const {
  Body,
  H2,
  Main,
  Section,
  Input,
  Label,
  Checkbox,
  Button,
} = require("react-alegrify-ui");

const CreateHead = require("../components/create-head");
const CreateWelcome = require("../components/create-welcome");
const CreateForm = require("../components/create-form");
const CreatePersonInput = require("../components/create-person-input");
const HugSelector = require("../components/hug-selector");
const Footer = require("../components/footer");

function Create() {
  const title = "Share coronafree hug";
  return (
    <html lang="en" dir="ltr">
      <CreateHead title={title} />
      <Body backgroundImage="./smiling-woman-hugging.jpg">
        <Main>
          <CreateWelcome title={title} />
          <CreateForm>
            <Section large plain id="hugger">
              <CreatePersonInput
                alt="hugger"
                label="Who are you exactly? (the hugger)"
                name="sender_name"
                id="senderName"
              />
            </Section>

            <Section large plain id="hugee">
              <CreatePersonInput
                alt="hugee"
                label="Name of the amazing person you want to hug (the hugee)"
                name="receiver_name"
                id="receiverName"
                reverse
              />
            </Section>

            <Section large>
              <H2>What kind of hug?</H2>
              <HugSelector />

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
          </CreateForm>
        </Main>
        <Footer />
      </Body>
      <script src="./create.js" defer />
    </html>
  );
}

module.exports = Create;
