let t={
  pageList:[
    {
      id:'',
      pageConfig:{
        opacity:1,
        backgroundColor:"",
        backgroundImage:'',
      },// 页码的基本配置
      renderData:[{ // 属于包裹组件的组件,自己提供的,用来包裹注册的组件
        componentType:'',
        componentId:'',
        componentConfig:{},
        baseConfig:{
          rect:{},
          animate:{},
        },
      }]
    }
  ]
};
// 组合当做一个组件去做,config 就是组合的组件config 结合起来
