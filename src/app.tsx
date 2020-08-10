import './index';
import React from 'react'
import ReactDom from 'react-dom';
import 'antd/dist/antd.min.css'
import View from "@/component/View";
import Page, {addComponent} from "@/core/Page";
let dom=document.getElementById('app');
let mockJson=new Array(10);
mockJson.fill(new Page({}));
ReactDom.render(<View />,dom);
