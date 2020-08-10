/**
 * @author zsp
 * @date 2020/6/28 15:42
 * @description  组件的核心逻辑,挂载删除等
 */
import React from "react";
import Component from "@/core/Component";

class ComponentUtils {
  private componentMap: {[key:string]:React.ReactNode}; // 组件缓存,根据ID
  private componentStyleMap: {[key:string]:React.ReactNode|object}; // 组件样式缓存,根据ID
  private static instance: ComponentUtils;
  private constructor() {
    this.componentMap={};
    this.componentStyleMap={};
  }

  static getInstance(): ComponentUtils {
    if (ComponentUtils.instance) {
      return ComponentUtils.instance;
    } else {
      ComponentUtils.instance = new ComponentUtils();
      return ComponentUtils.instance;
    }
  }
  /**
   * @description 注册组件
   * @param component 组件
   * @param type 组件唯一标识
   * @param configComponent 组件的配置组件或者空
   */
  registerComponent(type:string,component:React.ReactNode,configComponent:React.ReactNode|object){
    try {
      this.componentMap[type]=component;
      this.componentStyleMap[type]=configComponent;
    }catch (e) {

    }
  }
  // 通过类型获取组件
  getComponentByType(type:string):Component{
    return  {type,renderComponent:this.componentMap[type],configComponent:this.componentStyleMap[type]};
  }
}

export { ComponentUtils };
