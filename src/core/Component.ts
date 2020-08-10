import React from "react";

export default class Component {
    renderComponent:React.ReactNode;
    configComponent:React.ReactNode|{};
    type:string;
    constructor({renderComponent, configComponent, type}: { renderComponent: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined, configComponent: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined, type: string }) {
        this.renderComponent = renderComponent;
        this.configComponent = configComponent;
        this.type = type;
    }
}
