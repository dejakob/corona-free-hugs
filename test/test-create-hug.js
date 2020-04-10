const { createHug } = require("..");

(async () => {
  const id = await createHug(
    {
      sender_name: "Me",
      receiver_name: "You",
      hug_type: "https://media.giphy.com/media/M9gU6uprqD1LWcKlKm/giphy.gif",
      exchangable: "on",
      additional_comments: "..."
    },
    { upload: false }
  );

  console.log(`file:///tmp/${id}.html`);
})();
