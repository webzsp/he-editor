/**
 * @author zsp
 * @date 2020/7/15 16:38
 * @description
 */

import React, {lazy} from "react";
interface ConfigProps {
    layer:any
}
export default class PlainImage extends React.Component<ConfigProps>{
    static type: any;
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
        const {layer:{layerConfig,componentConfig}}=this.props;
        return (
            <div >
                <img draggable={"false"} style={this.getStyle()}  src={componentConfig.src} alt=""/>
            </div>
        )
    }
}
