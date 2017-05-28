/**
 * Created by chenghao01 on 2017/3/17.
 */
import React, {Component} from 'react';


const Index = ({ active, children, onClick,test,testFunc }) => {
    console.log("test:",test)
    return(
        <div>
            defaultPage
            <p style={{fontSize:'20px',color:'red'}} onClick={()=>testFunc(1111)}>{test}&nbsp;点我吧</p>
            <h1>{children}</h1>
        </div>
    )
}

export default Index;