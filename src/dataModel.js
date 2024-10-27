const dataModels = document.querySelectorAll("[data-model]")

// 各data-model要素の子要素を取得して配列に変換
// const dataModelsChildren = Array.from(dataModels).flatMap(dataModel => Array.from(dataModel.children))
// console.log(dataModelsChildren.forEach((childElement) => {
//   console.log(childElement)
// }))

// data-model属性を取得して、valueにセットする
dataModels.forEach((dataModel) => {
  console.log(dataModel.getAttribute("data-model"))
  dataModel.value = dataModel.getAttribute("data-model")
  dataModel.addEventListener("change", (event) => {
    dataModel.setAttribute("data-model", event.target.value)
  })
})

const dataTexts  = document.querySelectorAll("[data-text]")
const dataTextsArray = Array.from(dataTexts)
// console.log(dataTextsArray)
// console.log(dataTextsArray.forEach((dataText) => {
//   console.log(dataText.dataset.text)

// }))

// data-text属性を変数名として扱う
const dataTextValues = {} // オブジェクトを初期化
dataTextsArray.forEach((dataText) => {
  const variableName = dataText.dataset.text
  console.log(variableName)
  // 変数名をキーとしてオブジェクトに値を格納する
  dataTextValues[variableName] = dataText.textContent
  console.log(dataTextValues[variableName])
})

console.log(dataTextValues) // 最終的なオブジェクトを出力
