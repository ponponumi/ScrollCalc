import ScrollCalc from "../src/ScrollCalc";

// テキストリストを作成
let textList = document.getElementById("textList");
let text = document.createElement("li");
text.textContent = "Hello World";

for (let i = 0; i < 50; i++){
  textList.appendChild(text);
}
