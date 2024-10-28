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

const dataControllers = document.querySelectorAll("[data-controller]")

dataControllers.forEach(async (controller) => {
  const [controllerName, functionName] = controller
    .getAttribute("data-controller")
    .split("#")
  const trigger = controller.dataset.trigger || null
  console.log(
    `コントローラーを読み込み中: ${controllerName}, 関数: ${functionName}, トリガー: ${trigger}`
  )

  const handleEvent = async (event) => {
    try {
      let module
      if (window.jsDir) {
        module = await import(
          `${window.location.origin}/${window.jsDir}/${controllerName}_controller.js`
        )
      } else {
        module = await import(
          `${window.location.origin}/controllers/${controllerName}_controller.js`
        )
      }
      if (module[functionName]) {
        module[functionName](controller) // controllerってのはelementで引数に渡してる
      } else {
        console.error(
          `関数名 ${functionName}は ${controllerName}_controller.jsで見つかりませんでした`
        )
      }
    } catch (error) {
      console.error(
        `コントローラーが読み込めませんでした: ${controllerName}:`,
        error
      )
    }
  }

  if (trigger !== null) {
    controller.addEventListener(trigger, handleEvent)
  } else if (trigger === "hover") {
    controller.addEventListener("mouseover", handleEvent)
  } else {
    handleEvent()
  }
})
