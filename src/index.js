const Confirms = document.querySelectorAll("[data-confirm]")

Confirms.forEach((confirm) => {
  const message = confirm.getAttribute("data-confirm")
  const trigger = confirm.dataset.trigger || "click"

  const handleEvent = (event) => {
    if (!window.confirm(message)) {
      event.preventDefault()
    }
  }

  if (trigger === "hover") {
    confirm.addEventListener("mouseover", handleEvent)
  } else {
    confirm.addEventListener(trigger, handleEvent)
  }
})