import BaseConfig from "@/core/BaseConfig";
import {uuid} from "@/utils";

export default class WarpComponent<T> {
    componentType:string;
    componentId:string;
    componentConfig:T;
    baseConfig:BaseConfig;
    constructor({componentType, componentId, componentConfig, baseConfig}: { componentType: string, componentId?: string, componentConfig?: T, baseConfig?: BaseConfig }) {
        this.componentType = componentType;
        this.componentId = componentId??uuid();
        this.componentConfig = componentConfig??{}as T;
        this.baseConfig = baseConfig??new BaseConfig();
    }
}
