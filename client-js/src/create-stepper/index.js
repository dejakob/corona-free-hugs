/* eslint-env browser */
/* eslint-disable no-use-before-define */
import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Stepper } from "react-alegrify-ui";

const STEPS = [
  "Resolve identity crisis",
  "Choose a pigeon",
  "Understanding you're bored",
  "Finding out you're not getting paid for this"
];

function CreateStepper() {
  const [progress, setProgress] = useState(0);
  const scrollHandler = useCallback(({ target }) => {
    if (target.parentNode === document.body) {
      const { scrollHeight, scrollTop } = target;
      const scrollableHeight =
        scrollHeight - target.getBoundingClientRect().height;
      setProgress((scrollTop / scrollableHeight) * 100);
    }
  }, []);

  useEffect(() => {
    document
      .querySelector(".alegrify-body__page-scroll")
      .addEventListener("scroll", scrollHandler);
  }, []);

  return <Stepper progress={progress} steps={STEPS} />;
}

function mount() {
  installFont();

  const container = document.createElement("div");
  const style = `
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(to top, rgba(56, 54, 152, 0), rgba(56, 54, 152, 1));
    padding: 16px 0;
    user-select: none;
    pointer-events: none;
  `
    .trim()
    .replace(/(\n| ){2,}/gi, " ");

  container.setAttribute("style", style);
  ReactDOM.render(
    <div className="alegrify-main">
      <CreateStepper />
    </div>,
    container
  );
  document.body.appendChild(container);
}

function installFont() {
  const linkElement = document.createElement("link");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Caveat&display=swap"
  );
  document.head.appendChild(linkElement);
}

export { mount };
