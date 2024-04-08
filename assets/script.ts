import ScrollCalc from "../src/ScrollCalc";

// テキストリストを作成
let textList = document.getElementById("textList");

if (textList) {
  for (let i = 0; i < 50; i++){
    let text = document.createElement("li");
    text.textContent = "Hello World";
    textList.appendChild(text);
  }
}

console.log(["ピクセルを数値に変換するテスト", ScrollCalc.pixelNumber("334px")]);
console.log(["HTMLの高さを確認するテスト", ScrollCalc.htmlHeight()]);

window.addEventListener("scroll", function () {
  console.log(ScrollCalc.calcCore());
  console.log(ScrollCalc.calc());
  ScrollCalc.progressSet(document.getElementById("progress"));
});

// ScrollCalc.progressEventScroll(document.getElementById("progress"));
