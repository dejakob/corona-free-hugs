/* eslint-disable no-use-before-define,no-restricted-syntax,no-console */

const { Storage } = require("@google-cloud/storage");
const { lsrAsync } = require("lsr");

async function getBucket() {
  const credentials = await getCredentials();

  const storage = new Storage({
    projectId: credentials.projectId,
    credentials
  });
  return storage.bucket("coronafreehug.com");
}

async function getCredentials() {
  let credentials = {};

  try {
    // eslint-disable-next-line node/no-unpublished-require,global-require
    const contents = require("../credentials.js");
    credentials = { ...credentials, ...contents };
    // eslint-disable-next-line no-empty
  } catch (ex) {}

  [
    "type",
    "project_id",
    "private_key_id",
    "private_key",
    "client_email",
    "client_id",
    "auth_uri",
    "token_uri",
    "auth_provider_x509_cert_url",
    "client_x509_cert_url"
  ].forEach(key => {
    if (process.env && process.env[key]) {
      credentials[key] = process.env[key].replace(/\\n/gm, "\n");
    }
  });

  return credentials;
}

async function uploadFileToBucket(fileName, folderPath) {
  const bucket = await getBucket();

  // Uploads a local file to the bucket
  await bucket.upload(fileName, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    destination: fileName.replace(`${folderPath}/`, ""),
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: fileName.endsWith(".html")
        ? "no-cache"
        : "public, max-age=31536000"
    }
  });
  await bucket.file(fileName.replace(`${folderPath}/`, "")).makePublic();
  console.log(`${fileName} uploaded to bucket`);
}

async function uploadFolderToBucket(folderPath) {
  const files = (await lsrAsync(folderPath))
    .filter(item => item.mode !== 16877)
    .map(item => item.fullPath);

  for (const fileName of files) {
    // eslint-disable-next-line no-await-in-loop
    await uploadFileToBucket(fileName, folderPath);
  }
}

module.exports = {
  getCredentials,
  uploadFileToBucket,
  uploadFolderToBucket
};
