/**
 * @author zsp
 * @date 2020/6/28 15:42
 * @description  组件的核心逻辑,挂载删除等
 */
import Component from "./Component";

class ComponentUtils {
  private componentMap: {[key:string]:Component}; // 组件缓存,根据ID
  private static instance: ComponentUtils;
  private constructor() {
    this.componentMap={};
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
   */
  registerComponent(component:Component){
    try {
      this.componentMap[component.type]=component;
    }catch (e) {

    }
  }
  // 通过类型获取组件
  getComponentByType(type:string):Component{
    return  this.componentMap[type];
  }
}

export { ComponentUtils };
