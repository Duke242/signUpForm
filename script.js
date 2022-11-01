window.addEventListener("load", () => {
  document.querySelector("form")?.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  const error = document.querySelector('#password p')
  const passes = (
    Array.from(document.querySelectorAll('input[type="password"]'))
  )
  passes.forEach((elem, idx) => {
    elem.addEventListener('keypress', (evt) => {
      const next = `${evt.target?.value}${evt.key}`
      const other = passes[(idx + 1) % 2].value
      error.style.display = (
        next !== other ? (
          'block'
        ) : (
          'none'
        )
      )
    })
  })
})
