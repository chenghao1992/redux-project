/**
 * Created by chenghao01 on 2017/3/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';

// children就是组件引用时的子元素,但在使用路由了之后还不知道如何使用
const Index = ({test2, children, changeStatus,changeTest1,test1,testFunc,a }) => {
    console.log("test:",test1)
    return(
        <div>
            defaultPage
            <p style={{fontSize:'20px',color:'red'}} onClick={()=>testFunc(1111)}>{test1}&nbsp;点我吧</p>
            <h1>{children}</h1>
            <em onClick={changeStatus}>{test2},点击改变状态</em>
            <h2 onClick={()=>changeTest1('改变后的a的值')}>点击改变a的值</h2>
            <p>a的值：{a}</p>
            <Link to="/me">me{children}</Link>
        </div>
    )
}

export default Index;