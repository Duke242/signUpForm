window.addEventListener("load", () => {
  document.querySelector("form")?.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  const error = document.querySelector("#password p");
  const passes = Array.from(
    document.querySelectorAll('input[type="password"]')
  );
  passes.forEach((elem, idx) => {
    elem.addEventListener("keypress", (evt) => {
      const fieldset = evt.target.closest("fieldset");
      const next = `${evt.target?.value}${evt.key}`;
      const other = passes[(idx + 1) % 2].value;
      const equal = next === other;
      console.log({ next, other, equal });
      if (equal) {
        fieldset.classList.remove("errored");
      } else {
        fieldset.classList.add("errored");
      }
      error.style.display = equal ? "none" : "block";
    });
  }); 
});
