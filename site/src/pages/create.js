const React = require("react");
const {
  H1,
  H2,
  Main,
  Section,
  Input,
  Label,
  Card,
  Grid,
  GridCell
} = require("react-alegrify-ui");

const Head = require("../components/head");
const Body = require("../components/body");

const HUG_TYPES = [
  {
    image: "https://media.giphy.com/media/M9gU6uprqD1LWcKlKm/giphy.gif",
    alt: "Being alone sucks - Rachel Green",
    title: "Social distancy hug",
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
  }
];

function Create() {
  const title = "Create virtual hug";
  return (
    <html lang="en">
      <Head title={title} />
      <Body>
        <H1 className="alegrify-align-text--center">{title}</H1>
        <Main>
          <form action="create.html" method="POST">
            <Section spaceXL>
              <H2>Who deserves a hug?</H2>

              <Label htmlFor="receiverName">Name of this amazing person</Label>
              <Input name="receiver_name" id="receiverName" spaceL />

              <Label htmlFor="receiverEmail">
                Email of this amazing person
              </Label>
              <Input name="receiver_email" id="receveiverEmail" />
            </Section>
            <Section>
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

              <Grid>
                {HUG_TYPES.map(hug => (
                  <GridCell fo>
                    <Card
                      key={hug.title}
                      image={hug.image}
                      alt={hug.alt}
                      title={hug.title}
                      width={300}
                      height={300}
                      checkType="radio"
                      name="hug_type"
                      style={{ float: "left" }}
                    >
                      {hug.content}
                    </Card>
                  </GridCell>
                ))}
              </Grid>
            </Section>
          </form>
        </Main>
      </Body>
    </html>
  );
}

module.exports = Create;
