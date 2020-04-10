const path = require("path");

const { uploadFolderToBucket } = require("../common/gcloud");

(async () => {
  await uploadFolderToBucket(path.join(__dirname, "../dist"));
})();
