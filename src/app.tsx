import './index';
import React from 'react'
import ReactDom from 'react-dom';
import 'antd/dist/antd.min.css'
import H5Editor from "./component/H5Editor/H5Editor";
import Page from "./core/Page";
let dom=document.getElementById('app');
let mockJson=new Array(10);
mockJson.fill(new Page({}));
ReactDom.render(<H5Editor onReady={editor => {}}/>,dom);
