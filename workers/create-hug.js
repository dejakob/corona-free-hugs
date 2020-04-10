const Hug = require("../site/src/pages/hug");

function createHug(body) {
  return Hug({
    senderName: body.sender_name,
    receiverName: body.receiver_name,
    additionalComments: body.additional_comments,
    hugType: body.hug_type
  })
}

module.exports = createHug;
