/* eslint-env browser */
/* eslint-disable no-use-before-define */
const { document } = window;
const form = document.querySelector("form");
const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", handleSubmit);

function handleSubmit() {
  submitButton.setAttribute("disabled", "disabled");
  // Set spinner on button
  submitButton.setAttribute(
    "class",
    "alegrify-button alegrify-button--primary alegrify-button--loading"
  );
}
