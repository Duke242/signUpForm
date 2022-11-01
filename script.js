window.addEventListener("load", () => {
  console.info({ f: document.querySelector("form") });
  document.querySelector("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log({ evt });
  });
});
