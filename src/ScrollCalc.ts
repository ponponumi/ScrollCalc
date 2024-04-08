class ScrollCalc{
  pixelNumber(pixel: string) {
    // ピクセルを数値に変換
    pixel = pixel.replace("px", "");
    let result: number = Number(pixel);
    return result;
  }
}

export default new ScrollCalc();
