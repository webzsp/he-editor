import React from 'react';
import Draggable from 'react-draggable';
import style from './style.less';
import {
    BOTTOM_CENTER,
    BOTTOM_LEFT, BOTTOM_RIGHT,
    CENTER_LEFT,
    CENTER_RIGHT,
    TOP_CENTER,
    TOP_LEFT,
    TOP_RIGHT
} from "../../constant/dom";
import Icon from "../Icon/Icon";

export default class EditorContainer extends React.PureComponent {

    mouseDown(){

    }
    handlerRotate(){}
    onDrag(){
        console.log(22,this);
    }
    render() {
        return (
            <>
                <div className={style.editor_container}>
                    <Draggable onDrag={::this.onDrag}>
                        <div className={style.content}>
                            我是一个拖动组件
                            <span className="operate-rotate" onMouseDown={this.handlerRotate.bind(this)}>
                                <Icon type='icon-xuanzhuan-copy' style={{color:'#4cae4c'}}/>
                            </span>
                            <span onMouseDown={this.mouseDown.bind(this, TOP_LEFT)} className="operate-point top-left">
                            </span>
                            <span onMouseDown={this.mouseDown.bind(this, TOP_CENTER)} className="operate-point top-center"/>
                            <span onMouseDown={this.mouseDown.bind(this, TOP_RIGHT)} className="operate-point top-right"/>
                            <span onMouseDown={this.mouseDown.bind(this, CENTER_LEFT)} className="operate-point center-left"/>
                            <span onMouseDown={this.mouseDown.bind(this, CENTER_RIGHT)} className="operate-point center-right"/>
                            <span onMouseDown={this.mouseDown.bind(this, BOTTOM_LEFT)} className="operate-point bottom-left"/>
                            <span onMouseDown={this.mouseDown.bind(this, BOTTOM_CENTER)} className="operate-point bottom-center"/>
                            <span onMouseDown={this.mouseDown.bind(this, BOTTOM_RIGHT)} className="operate-point bottom-right"/>
                        </div>
                    </Draggable>

                </div>
            </>
        )
    }
}
