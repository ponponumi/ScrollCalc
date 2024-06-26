class ScrollCalc{
  pixelNumber(pixel: string) {
    // ピクセルを数値に変換
    pixel = pixel.replace("px", "");
    let result: number = Number(pixel);
    return result;
  }

  htmlHeight() {
    let result: number = 0;

    let htmlElem = document.querySelector('html');

    if (htmlElem !== null) {
      let htmlHeight: string = getComputedStyle(htmlElem).getPropertyValue("height");
      result = this.pixelNumber(htmlHeight);
    }

    return result;
  }

  calcCore() {
    // 計算のコア機能
    // HTMLの高さ
    let htmlHeight: number = this.htmlHeight();

    // 画面の高さ
    let windowY = window.innerHeight;

    // スクロールエリア(HTMLの高さから画面の高さを引いた範囲)
    let scrollArea: number = htmlHeight - windowY;

    if (scrollArea < 0) {
      // スクロールが0より小さければ、0に上書き
      scrollArea = 0;
    }

    // スクロールの現在地
    let scrollPosition: number = window.scrollY;

    // 進捗状況を初期化
    let progress: number = 0;

    if (scrollArea > 0) {
      // スクロールエリアが0ではなければ、進捗割合を計算
      progress = scrollPosition / scrollArea;
    }

    let list = {
      "scrollPosition": scrollPosition,
      "scrollArea": scrollArea,
      "document": htmlHeight,
      "window": windowY,
      "progress": progress,
    };

    return list;
  }

  calc() {
    // 進捗割合のみを返す
    let list = this.calcCore();
    return list.progress;
  }

  progressSet(progressElem) {
    // progressタグに反映する
    let elemCheck = progressElem instanceof HTMLElement;

    if (elemCheck) {
      // HTMLであれば
      let maxCheck = 'max' in progressElem;
      let valueCheck = 'value' in progressElem;

      if (maxCheck && valueCheck) {
        let max = progressElem.max;
        progressElem.value = this.calc() * max;
      }
    }
  }

  progressEventScroll(progressElem) {
    // スクロールイベントを追加する
    let self = this;
    window.addEventListener('scroll', function () {
      self.progressSet(progressElem);
    });
  }
}

export default new ScrollCalc();
