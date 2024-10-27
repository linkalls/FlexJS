const Confirm = document.querySelectorAll("[data-confirm]")
Confirm.forEach((confirm) => {
  confirm.addEventListener("click", (event) => {
    const message = confirm.getAttribute("data-confirm")
    if (!window.confirm(message)) {
      //ユーザーがキャンセルを押したときにデフォルトの処理をキャンセルする
      event.preventDefault()
    }
  })
})

