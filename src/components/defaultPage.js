/**
 * Created by chenghao01 on 2017/3/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import ArrCom from './ArrCom'
import classNames from 'classnames'
import styles from '../less/defaultPage.less';
// children就是组件引用时的子元素,但在使用路由了之后还不知道如何使用
console.log("styles:",styles)
const Index = ({test2, children, changeStatus,changeTest1,test1,testFunc,a,testFetch,name='defaultValue',list=[] }) => {
    console.log("list:",list)
    return(
        <div>
            defaultPage
            <p style={{fontSize:'20px',color:'red'}} onClick={()=>testFunc(1111)}>{test1}&nbsp;点我吧</p>
            <h1>{children}</h1>
            <em onClick={changeStatus}>{test2},点击改变状态</em>
            <h2 onClick={()=>changeTest1('改变后的a的值')}>点击改变a的值</h2>
            <p className={classNames('font_30')}>a的值：{a}</p>
            <Link to="/me">me{children}</Link>
            <div onClick={testFetch} style={{cursor:"pointer"}}>点击测试异步请求</div>
            <div>
                <strong>{name}</strong>
                <ul>
                    {list.map(function(value,index){
                        return (<li key={index}>{value.data.title}</li>)
                    })}
                </ul>


            </div>
        </div>
    )
}


export default Index;