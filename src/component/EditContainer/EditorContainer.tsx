import React from 'react';
import Draggable from 'react-draggable';
import style from './style.less';
import {
    BOTTOM_CENTER,
    BOTTOM_LEFT, BOTTOM_RIGHT,
    CENTER_LEFT,
    CENTER_RIGHT, LAYER_ROTATE,
    TOP_CENTER,
    TOP_LEFT,
    TOP_RIGHT
} from "../../constant/dom";
import Icon from "../Icon/Icon";

export default class EditorContainer extends React.PureComponent {

    mouseDown(type:string){
        console.log(type);
    }
    handlerRotate(type:string){

    }
    onDrag(){
        console.log(22,this);
    }

    onStart(){

    }
    render() {
        return (
            <>
                <div className={style.editor_container}>
                    <div></div>
                    <Draggable onDrag={this.onDrag}  onStart={()=>false} position={{x:0,y:0}}>
                        <div className={style.content} onMouseDown={e => console.log(e)}>
                            <div style={{width:100,height:100}}>
                                我是组件
                            </div>
                            <span className="operate-rotate" editoreventtype={LAYER_ROTATE}>
                                <Icon type='icon-xuanzhuan-copy' style={{color:'#4cae4c'}}/>
                            </span>
                            <span editoreventtype={TOP_LEFT} className="operate-point top-left"/>
                            <span editoreventtype={TOP_CENTER} className="operate-point top-center"/>
                            <span editoreventtype={TOP_RIGHT} className="operate-point top-right"/>
                            <span editoreventtype={CENTER_LEFT} className="operate-point center-left"/>
                            <span editoreventtype={CENTER_RIGHT} className="operate-point center-right"/>
                            <span editoreventtype={BOTTOM_LEFT} className="operate-point bottom-left"/>
                            <span editoreventtype={BOTTOM_CENTER} className="operate-point bottom-center"/>
                            <span editoreventtype={BOTTOM_RIGHT}  className="operate-point bottom-right"/>
                        </div>
                    </Draggable>
                </div>
            </>
        )
    }
}
