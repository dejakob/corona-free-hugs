/* eslint-disable global-require */
const { renderToStaticMarkup } = require("react-dom/server");

const Hug = require("../site/lib/pages/hug");

(async () => {
  const hugHtml = renderToStaticMarkup(
    Hug({
      senderName: "Me",
      receiverName: "You",
      additionalComments:
        "Bla bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla  bla bla ",
      hugType: "https://media.giphy.com/media/M9gU6uprqD1LWcKlKm/giphy.gif",
      exchangable: true
    })
  );

  require("fs").writeFileSync(
    require("path").join(__dirname, "test.html"),
    hugHtml
  );
})();
