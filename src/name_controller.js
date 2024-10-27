export function aqa(element) {
  console.log("aqa関数のelementは", element)
  console.log(element.dataset.count)

  if (!element.dataset.count) {
    element.dataset.count = "0"
  }

  // data-count属性をインクリメント
  element.dataset.count = (parseInt(element.dataset.count) + 1).toString()

  // 実行内容を更新
  element.innerHTML = `aqa関数が${element.dataset.count}回実行されました\n ランダムな数値: `
  element.innerHTML += Math.floor(Math.random() * 100 + 1)
}
