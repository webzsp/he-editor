/**
 * @author zsp
 * @date 2020/8/16 14:21
 * @description 包裹组件 ,用来包装一层注册的组件
 */

import React from 'react';

interface Props {
    componentList:[],
}
export default class WrapComponent extends React.PureComponent<Props>{

     render(){
        return (
            <>
	            <div>

                </div>
            </>
        )
    }
}
