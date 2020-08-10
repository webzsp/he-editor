export default class Rect {
  bottom?: number;
  height: number;
  left: number;
  right?: number;
  top: number;
  width: number;
  rotate: number;
  matrix:string;
  /**
   *
   * @param bottom 定义bottom 属性
   * @param height 高
   * @param left 定位left属性
   * @param right 定位right属性
   * @param top 定位top属性
   * @param width 宽
   * @param rotate 旋转角度
   * @param matrix ''
   */
  constructor({bottom, height, left, right, top, width,rotate,matrix}: {matrix?:string, bottom?: number, height?: number, left?: number, right?: number, top?: number, width?: number ,rotate?:number}={}) {
    this.bottom = bottom;
    this.height = height??0;
    this.left = left??0;
    this.right = right??0;
    this.top = top??0;
    this.width = width??0;
    this.rotate=rotate??0;
    this.matrix=matrix??'';
  }
}
