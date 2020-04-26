/* eslint-env browser */
/* eslint-disable no-use-before-define */
const { document } = window;

const script = document.createElement("script");
script.setAttribute(
  "src",
  "https://www.googletagmanager.com/gtag/js?id=UA-164649754-1"
);
document.body.appendChild(script);

/* Show cookiebanner */
const cookieBanner = document.getElementById("cookieBanner");

if (cookieBanner) {
  let hasSeenBanner = false;

  try {
    if (window.localStorage) {
      hasSeenBanner = window.localStorage.getItem("hasSeenCookieBanner");
    }
  } catch (ex) {
    // eslint-disable no-empty
  }

  if (!hasSeenBanner) {
    showCookieBanner();
  }
}

function showCookieBanner() {
  const okButton = cookieBanner.querySelector("button");
  cookieBanner.style.display = "flex";
  okButton.focus();
  okButton.addEventListener("click", () => {
    cookieBanner.style.display = "none";
  });

  try {
    if (window.localStorage) {
      window.localStorage.setItem("hasSeenCookieBanner", true);
    }
  } catch (ex) {
    // eslint-disable no-empty
  }
}

/* eslint-disable */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-164649754-1");
/* eslint-enable */
