# Corona free hug

If you watched the news recently, you might have noticed that the world has changed.

🍩 forget that we´re in this together, so let the people know you care about them by sending a virtual hug

[Check out the live website here](https://coronafreehug.com)

## Contribute

Open a PR, when approved and merged, bitrise will automatically update the website

## How it works

### Static pages

All pages are completely static and hosted on Gcloud storage.

They pages are getting generated on build time with React and some node scripts.

Check out [the pages folder](./site/src/pages) to see the source code of all pages.

### CSS first, JS maybe later

All pages work with CSS and have some tiny amount of JS for extra interactivity.

Like, how much client JS do you need to create a form?

### Creating a hug

A serverless cloud function takes care of hug creation.

The function can be found in [worker-triggers](./worker-triggers/create-hug).

This will use this repo as a package to run the [createHug script](./workers/create-hug.js).

The script will render another static page and upload it to Gcloud storage.

This way, there'll be no server delay when opening a page; but a little bit when creating a hug

## Used resources

- [Tabler icons](https://github.com/tabler/tabler-icons)
- [Alegrify UI - dark theme](https://dejakob.com/alegrify-ui)
- [React Alegrify UI](https://dejakob.com/react-alegrify-ui)
