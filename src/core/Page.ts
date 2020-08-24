
import PageConfig from "./PageConfig";
import {uuid} from "../utils";
import Layer from "./Layer";

export default class Page {
    id:string;
    pageConfig:PageConfig;
    renderData:Layer<any>[];
    constructor({id, pageConfig, renderData}: { id?: string, pageConfig?: PageConfig, renderData?: Layer<any>[] }={}) {
        this.id = id??uuid();
        this.pageConfig = pageConfig??new PageConfig();
        this.renderData = renderData??[];
    }
}

