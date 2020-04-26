/* eslint-env browser */
/* eslint-disable no-use-before-define */
const { history } = window;

if (window.location.href.indexOf("created=true") > -1) {
  showNotification();
}

if (typeof history !== "undefined") {
  history.replaceState(
    {},
    document.title,
    window.location.origin + window.location.pathname
  );
}

const copyToClipboardBtn = document.querySelector(".copyToClipboard");

if (copyToClipboardBtn) {
  copyToClipboardBtn.addEventListener("click", handleCopyToClipboard);
}

function showNotification() {
  document.getElementById("successNotification").style.display = "block";
}

function hideNotification() {
  document.getElementById("successNotification").style.display = "none";
}

function handleCopyToClipboard() {
  try {
    copyToClipboard(window.location.origin + window.location.pathname);
  } catch (ex) {
    alert(
      "Could not access your clipboard. Please copy the full URL (on top of the page)"
    );
  }

  hideNotification();
}

function copyToClipboard(e) {
  /* eslint-disable */
  let n;
  let t;
  let o;
  let a;
  (t = e),
    ((n = document.createElement("textArea")).readOnly = !0),
    (n.contentEditable = !0),
    (n.value = t),
    document.body.appendChild(n),
    navigator.userAgent.match(/ipad|iphone/i)
      ? ((o = document.createRange()).selectNodeContents(n),
        (a = window.getSelection()).removeAllRanges(),
        a.addRange(o),
        n.setSelectionRange(0, 999999))
      : n.select(),
    document.execCommand("copy"),
    document.body.removeChild(n);
  /* eslint-enable */
}
