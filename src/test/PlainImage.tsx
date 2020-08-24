/**
 * @author zsp
 * @date 2020/7/15 16:38
 * @description
 */

import React from "react";
interface ConfigProps {
    layer:any
}
export default class PlainImage extends React.Component<ConfigProps>{
    static type: string='plainImage';
    getStyle(){
        const {layer:{componentConfig,layerConfig}}=this.props;
        return {
            width:layerConfig.rect.width,
            height:layerConfig.rect.height,
            opacity:componentConfig.opacity,
            borderRadius:componentConfig.radius,
            borderStyle:componentConfig.borderType,
            borderWidth:componentConfig.borderWidth,
            borderColor:componentConfig.borderColor
        }
    }
    render(){
        return (
            <div >
                <img draggable={"false"}  src={''} alt=""/>
            </div>
        )
    }
}
