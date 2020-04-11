const React = require("react");
const {
  H1,
  H2,
  Main,
  Section,
  Input,
  Label,
  Card,
  Dialog,
  Checkbox,
  Button,
  Footer
} = require("react-alegrify-ui");

const Head = require("../components/head");
const Body = require("../components/body");
const HUG_TYPES = require('../config/hug-types');

function Create() {
  const title = "Create coronafree hug";
  return (
    <html lang="en">
      <Head title={title} />
      <Body>
        <H1 className="alegrify-align-text--center">{title}</H1>
        <Main>
          <form action="https://us-central1-experiments-248915.cloudfunctions.net/create-hug" method="POST">
            <Section spaceXL>
              <H2>Let's make it personal</H2>

              <Label htmlFor="senderName">Who do you think you are?</Label>
              <Input name="sender_name" id="senderName" required spaceL />
              <Label htmlFor="receiverName">Name of this amazing person</Label>
              <Input name="receiver_name" id="receiverName" required />
            </Section>
            <Section spaceXL>
              <H2>What kind of hug?</H2>
              <small
                className="alegrify-space--large"
                style={{ display: "block" }}
              >
                (Gifs provided by{" "}
                <a
                  href="https://giphy.com/"
                  target="_blank"
                  title="GIPHY: website with many animated gifs"
                  className="alegrify-a"
                >
                  Giphy.com
                </a>
                )
              </small>

              <div
                className="alegrify-align-child--start"
                style={{ overflow: "auto", margin: "0 -8px" }}
              >
                {HUG_TYPES.map(hug => (
                  <div key={hug.title} style={{ padding: "0 8px" }}>
                    <Card
                      image={hug.image}
                      alt={hug.alt}
                      title={hug.title}
                      value={hug.image}
                      width={hug.width || 300}
                      height={hug.height || 300}
                      checkType="radio"
                      name="hug_type"
                      style={{ float: "left" }}
                    >
                      {hug.content}
                    </Card>
                  </div>
                ))}
              </div>
            </Section>

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

            <Section>
              <H2>Anything to add?</H2>
              <Label htmlFor="additionalComments">
                Add some more text here to personalize the hug
              </Label>
              <Input id="additionalComments" name="additional_comments" multiline spaceL />
              <Button id="submitButton" primary>
                Generate hug
              </Button>
            </Section>
          </form>
        </Main>
        <Footer className="alegrify-align-text--center">
          Made with ❤ in quarantine
        </Footer>
        <Dialog id="successDialog" title="Your hug is live!">
          Now share this link to the hug: ...
        </Dialog>
      </Body>
    </html>
  );
}

module.exports = Create;
