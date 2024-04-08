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
