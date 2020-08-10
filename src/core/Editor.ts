/**
 * @author zsp
 * @date 2020/8/9 21:05
 * @description
 */
import Page from "@/core/Page";
import {ComponentUtils} from "@/core/ComponentUtils";
import {dispatch} from "@/core/Event";
interface EditorConfig {

}
export default class Editor {
    pageList:Page[];
    editorConfig:EditorConfig;
    constructor({pageList, editorConfig}: { pageList: Page[], editorConfig: EditorConfig }) {
        this.pageList = pageList;
        this.editorConfig = editorConfig;
    }
    getPageList(){
        return this.pageList;
    }

    addComponent(componentType:string,config:any){
       let component= ComponentUtils.getInstance().getComponentByType(componentType);
    }

    addPage(page:Page=new Page()){
        this.pageList.push(page);
        this.update()
    }

    update(){
        dispatch('update',this.pageList)
    }

}
