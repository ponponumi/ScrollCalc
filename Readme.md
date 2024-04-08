# Scroll Calc

このパッケージは、Webページのスクロール(進捗)割合を計算する、TypeScript(JavaScript)パッケージです。

## インストール方法について

次のコマンドを実行する事で、インストール可能です。

```bash
npm install scroll-calc
```

## 呼び出し方法について

次のコードで、呼び出す事が出来ます。

```javascript
import ScrollCalc from "scroll-calc";

// 進捗割合を取得
let progressProportion = ScrollCalc.calc();

// スクロール時にprogressタグに反映
let progressElem = document.getElementById("progress");
ScrollCalc.progressEventScroll(progressElem);
```

## ライセンスについて

このパッケージは、MITライセンスとして作成されています。
