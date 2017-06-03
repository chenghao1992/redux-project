import React, {Component} from 'react';
import { Router, Route, hashHistory,Link } from 'react-router';


const ArrCom=({arr})=>{
    console.log(arr)
    return(
        <div>
            {arr.map(function (value,index) {
                <p>{value}</p>
            })}
        </div>
    )
}

export default ArrCom;