/**
 * @author zsp
 * @date 2020/8/13 21:56
 * @description icon 组件使用阿里的icon图标库
 */
import React from "react";

interface Props {
    /**
     * 类名
     */
    type:string,
    style?:React.CSSProperties
}
const Icon:React.FC<Props>=function  (props){
    let {style}=props;
    return <span className={`iconfont ${props.type}`} style={{...style}}/>
};
export default Icon;
