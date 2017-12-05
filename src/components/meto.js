/**
 * Created by Administrator on 2016/12/17.
 */

import React, {Component} from 'react';
import { Router, Route, hashHistory,Link } from 'react-router';


export default class Me extends Component{
    render(){
        console.log(this.props.children)
        return (
            <div ><Link to="/meto">三级页面</Link>


            </div>
        )

        console.log("执行几次")

    }
}
