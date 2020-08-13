import {TRANSPARENT} from "../constant/dom";

export default class PageConfig {
    opacity:number;
    backgroundColor:string;
    backgroundImage:string;
    constructor({opacity, backgroundColor, backgroundImage}: { opacity?: number, backgroundColor?: string, backgroundImage?: string }={}) {
        this.opacity = opacity??1;
        this.backgroundColor = backgroundColor??TRANSPARENT;
        this.backgroundImage = backgroundImage??'';
    }
}
