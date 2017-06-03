/**
 * Created by 12718 on 2017/5/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import Index from '../components/defaultPage';
import { changeStatus,changeTest1 ,testFetch} from '../actions'
// 使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
/*
mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。
ownProps是组件引用时传入，用了路由之后好像无法传入了
*/
const mapStateToProps = (state, ownProps) =>{
    //这里面的state是整个状态树，和reducers 里面的不一样

    console.log('state:',state)
    console.log('ownProps:',ownProps)

    return ({
        test1:'我是从container里面传值过来的',
        test2:state.defaultPage.b,
        ...state.defaultPage,
        testFunc:(params)=>{
            console.log(params)
        },
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeStatus: () => {
        console.log('点击了改变状态')
        dispatch(changeStatus('测试改变状态'))
    },
    changeTest1:(params)=>{
        dispatch(changeTest1(params))
    },
    testFetch:()=>{
        dispatch(testFetch())
    }

})

const DefaultPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

export default DefaultPage;