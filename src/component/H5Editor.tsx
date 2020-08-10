import React from 'react';
import Editor from "@/core/Editor";
import View from "@/component/View";
import {subscription} from "@/core/Event";

interface IProps {
    onReady?:(editor:Editor)=>void;
}
export default class H5Editor extends React.PureComponent<IProps>{
    state={
        editorInstance:Editor,
        pageList:[]
    };
    componentDidMount(): void {
        if(this.props.onReady){
            this.props.onReady(new Editor({}));
        }
        this.addEventListener();
    }
    componentWillUnmount(): void {
        this.removeEventListener();
    }

    addEventListener(){
        subscription('update',this.handlerUpdate)
    }

    handlerUpdate=(value:any)=>{
        this.setState({
            pageList:value
        })
    };

    removeEventListener(){

    }

    render(){
        const {editorInstance} = this.state;
        return (
            <div>
                <View pageList={editorInstance}/>
            </div>
        )
    }
}
