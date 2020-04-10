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

  // Output index contents
  await writeFile(`/tmp/${id}.html`, hugHtml);

  // Upload to gcloud
  try {
    await uploadFileToBucket(`/tmp/${id}.html`, "/tmp");
  } catch (ex) {
    console.error(ex);
  }

  // Delete temp file
  try {
    await deleteFile(`/tmp/${id}.html`);
  } catch (ex) {
    console.error(ex);
  }

  // Return id of created file
  return id;
}

module.exports = createHug;
