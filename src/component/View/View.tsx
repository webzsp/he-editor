/**
 * @author zsp
 * @date 2020/8/9 20:03
 * @description 渲染组件
 */
import React from 'react';
import Page from "../../core/Page";
interface IProps {
    pageList?:Page[]
}
export default class View extends React.PureComponent<IProps>{
    componentDidMount(): void {
    }

    render(){
        return (
            <div>
                我是谁1
            </div>
        )
    }
}
