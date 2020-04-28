/* eslint-env browser */
/* eslint-disable no-use-before-define */
// Polyfills
import "@babel/polyfill";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

init();

async function init() {
  // Load async
  import("./create-form");

  const { mount: mountCreateStepper } = await import("./create-stepper");
  mountCreateStepper();
}
