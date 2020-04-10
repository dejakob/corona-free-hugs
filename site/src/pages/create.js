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

const HUG_TYPES = [
  {
    image: "https://media.giphy.com/media/M9gU6uprqD1LWcKlKm/giphy.gif",
    alt: "Being alone sucks - Rachel Green",
    title: "Social distancing hug",
    content: `This hug let's your friend know they're not alone, although they're somewhat pshysically are.`
  },
  {
    image: "https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif",
    alt: "Virtual hug image",
    title: "The virtual hug",
    content:
      "The classic virtual hug let's somone know they get a hug although you're a long distance away. Ideal for situations like the lockdown"
  },
  {
    image: "https://media.giphy.com/media/U0nW0QagDmTwA/giphy.gif",
    alt: "I request the highest of fives - Barney Stinson",
    title: "The highest of fives",
    content:
      "Why give a hug if you can send a legen... WAIT FOR IT... dary high five?"
  },
  {
    image: "https://media.giphy.com/media/3oxHQDfHIGY7jYSbuw/giphy.gif",
    alt: "Take it sleazy - Michael of the good place",
    title: "Take it sleazy",
    content:
      "Remind your loved ones to take things easy while they're living in the bad place"
  },
  {
    image: "https://media.giphy.com/media/YT95XJOLvY1t2SJgpR/giphy.gif",
    alt: "Hang in there",
    title: "Hang in there",
    content: "Don't give up! The crisis will end one day... maybe..."
  }
];

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
              <H2>Who deserves a hug?</H2>

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
                      width={300}
                      height={300}
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
