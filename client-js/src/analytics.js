/* eslint-env browser */
/* eslint-disable no-use-before-define */
const { document } = window;

delete document.cookie;

const script = document.createElement("script");
script.setAttribute(
  "src",
  "https://www.googletagmanager.com/gtag/js?id=UA-164649754-1"
);
document.body.appendChild(script);

/* eslint-disable */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-164649754-1", { storage: "none" });
/* eslint-enable */
