const cuid = require("cuid");

const Hug = require("../site/src/pages/hug");

async function createHug(body) {
  const hugHtml = Hug({
    senderName: body.sender_name,
    receiverName: body.receiver_name,
    additionalComments: body.additional_comments,
    hugType: body.hug_type
  });
  const id = cuid();

  // Create dist folder if not existing
  try {
    await mkdir(path.join(__dirname, "../dist"));
  } catch (ex) {
    console.info("Dist dir already exists");
  }

  // Output index contents
  try {
    await writeFile(path.join(__dirname, `../dist/${id}/index.html`), hugHtml);
  } catch (ex) {
    console.error(ex);
  }

  return
}

module.exports = createHug;
