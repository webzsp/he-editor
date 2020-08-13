import WarpComponent from "./warpComponent";
import PageConfig from "./PageConfig";
import {uuid} from "../utils";

export default class Page {
    id:string;
    pageConfig:PageConfig;
    renderData:WarpComponent<any>[];
    constructor({id, pageConfig, renderData}: { id?: string, pageConfig?: PageConfig, renderData?: WarpComponent<any>[] }={}) {
        this.id = id??uuid();
        this.pageConfig = pageConfig??new PageConfig();
        this.renderData = renderData??[];
    }
}

