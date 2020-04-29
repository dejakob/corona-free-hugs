/* eslint-disable camelcase,node/no-unsupported-features/es-syntax */
const { createHug } = require("corona-free-hugs");

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.createHug = (req, res) => {
  const {
    receiver_name,
    sender_name,
    hug_type,
    exchangable,
    additional_comments
  } = { ...req.body, ...req.query };

  createHug({
    receiver_name,
    sender_name,
    hug_type,
    exchangable,
    additional_comments
  })
    .then(id => {
      res.redirect(`https://coronafreehug.com/${id}.html?created=true`);
    })
    .catch(() => res.status(500));
};
