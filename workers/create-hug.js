const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);

const cuid = require("cuid");

const Hug = require("../site/lib/pages/hug");
const { uploadFileToBucket } = require("../common/gcloud");

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
    await writeFile(path.join(__dirname, `./temp/${id}.html`), hugHtml);
    await uploadFileToBucket(
      path.join(__dirname, `./temp/${id}.html`),
      path.join(__dirname, `./temp`)
    );
  } catch (ex) {
    console.error(ex);
  }

  return;
}

module.exports = createHug;
