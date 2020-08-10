/**
 * @author zsp
 * @date 2020/8/9 21:05
 * @description
 */
import Page from "@/core/Page";
import {ComponentUtils} from "@/core/ComponentUtils";
import {dispatch} from "@/core/Event";
interface EditorConfig {
    width:number;
    height:number;
    scale:number,
}
interface EditorEvent {

}
// const defaultEditorConfig:EditorConfig={
//     width:680,
//     height:1280,
//     scale:1,
// };
// const defaultEditorConfig1:EditorEvent={
//
// }
export default class Editor {
    static defaultEditorConfig:EditorConfig={
        width:680,
        height:1280,
        scale:1,
    };
    static defaultEditorEvent:EditorEvent={

    };
    pageList:Page[];
    editorConfig?:EditorConfig;
    editorEvent?:EditorEvent;
    /**
     * @param pageList 页码数据
     * @param editorConfig 编辑器配置文件
     * @param editorEvent 编辑器事件配置
     * @description 编辑器核心方法
     */
    constructor({pageList, editorConfig={} as EditorConfig,editorEvent={} as EditorEvent}: {editorEvent?:EditorEvent, pageList: Page[], editorConfig?: EditorConfig }) {
        this.pageList = pageList;
        this.editorConfig ={...Editor.defaultEditorConfig,...editorConfig};
        this.editorEvent={...Editor.defaultEditorEvent,...editorEvent};
    }

    /**
     * @description 获取界面列表
     */
    getPageList(){
        return this.pageList;
    }

    /**
     *
     * @param componentType 组件唯一类型标识
     * @param config // 组件的配置
     */
    addComponent(componentType:string,config:any){
       let component= ComponentUtils.getInstance().getComponentByType(componentType);
    }

    /**
     * @description 添加一页数据
     * @param page 页码数据
     */
    addPage(page:Page=new Page()){
        this.pageList.push(page);
        this.update()
    }

    /**
     * @description 更新组件数据,
     */
    update(){
        dispatch('update',this.pageList)
    }

}
