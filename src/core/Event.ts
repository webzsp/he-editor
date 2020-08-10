/**
 * @author zsp
 * @date 2020/7/8 16:19
 * @description 事件分发的
 */

import {EventEmitter} from 'events';
class EventBusP extends EventEmitter{
    constructor() {
        super();
    }

}

let EventBus =new EventBusP();

/**
 *
 * @param type 事件类型
 * @param payload 数据
 */
function dispatch (type:string,payload:any){
    EventBus.emit(type,payload)
}

/**
 * @description 订阅事件
 * @param type 事件类型
 * @param callback 回调函数
 */
function subscription<T> (type:string,callback:(data:T)=>void){
    EventBus.addListener(type,callback)
}

/**
 * @description 订阅事件
 * @param type 事件类型数组
 * @param callback 回调函数
 */
function subscriptions<T> (type:Array<string>,callback:(data:T)=>void){
    for (let i = 0; i < type.length; i++) {
        const typeElement = type[i];
        subscription(typeElement,callback)
    }
}

export {dispatch,subscription,subscriptions};
