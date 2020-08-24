import React from "react";
interface Component1 {
    renderComponent:React.ReactNode;
    configComponent:React.ReactNode|{};
    editorComponent:React.ReactNode;
}
export default class Component implements Component1{
    renderComponent:React.ReactNode;
    configComponent:React.ReactNode|{};
    editorComponent:React.ReactNode;
    type:string;
    constructor({renderComponent, configComponent, type,editorComponent}: {editorComponent?:React.ReactNode, renderComponent: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined, configComponent: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined, type: string }) {
        this.renderComponent = renderComponent;
        this.configComponent = configComponent;
        this.type = type;
        this.editorComponent=editorComponent;
    }
}
