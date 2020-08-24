import './index';
import React from 'react'
import ReactDom from 'react-dom';
import 'antd/dist/antd.min.css'
import H5Editor from "./component/H5Editor/H5Editor";
import Page from "./core/Page";
import Editor from "./core/Editor";
import PlainImage from "./test/PlainImage";
import Component from "./core/Component";
let dom=document.getElementById('app');
let com=new Component({renderComponent:PlainImage,editorComponent:PlainImage,type:PlainImage.type,configComponent:{}});
function init (editor:Editor){
    editor.registerComponent(com);
    editor.addComponent()

    // editor.addComponent()

}
ReactDom.render(<H5Editor onReady={editor => {
    init(editor);
}}/>,dom);
