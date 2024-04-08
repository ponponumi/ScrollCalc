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
      console.log(htmlHeight);
      result = this.pixelNumber(htmlHeight);
    }

    return result;
  }
}

export default new ScrollCalc();
