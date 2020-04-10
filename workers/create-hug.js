const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);
const deleteFile = promisify(fs.unlink);

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
    await mkdir(path.join(__dirname, "./temp"));
  } catch (ex) {
    console.info("Temp dir already exists");
  }

  // Output index contents
  await writeFile(path.join(__dirname, `./temp/${id}.html`), hugHtml);

  // Upload to gcloud
  try {
    await uploadFileToBucket(
      path.join(__dirname, `./temp/${id}.html`),
      path.join(__dirname, `./temp`)
    );
  } catch (ex) {
    console.error(ex);
  }

  // Delete temp file
  try {
    await deleteFile(path.join(__dirname, `./temp/${id}.html`));
  } catch (ex) {
    console.error(ex);
  }

  // Return id of created file
  return id;
}

module.exports = createHug;

createHug({
  receiver_name: "jhj",
  hug_type: "https://media.giphy.com/media/M9gU6uprqD1LWcKlKm/giphy.gif",
  exchangable: "on",
  additional_comments: "bhjb"
}).then(console.log);
