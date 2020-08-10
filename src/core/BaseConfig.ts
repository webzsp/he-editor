import Rect from "@/core/Rect";
import Animate from "@/core/Animate";
export default class BaseConfig {
    rect:Rect;
    animate:Animate;
    constructor({rect, animate}: { rect?: Rect, animate?: Animate }={}) {
        this.rect = rect??new Rect();
        this.animate = animate??new Animate();
    }
}
