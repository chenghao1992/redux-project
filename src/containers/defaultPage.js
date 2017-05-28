/**
 * Created by 12718 on 2017/5/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import Index from '../components/defaultPage';

const mapStateToProps = (state, ownProps) =>{

    return ({
        test:'我是从container里面传值过来的',
        testFunc:(params)=>{
            console.log(params)
        },
        active: ownProps.filter === state.visibilityFilter
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})

const DefaultPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

export default DefaultPage;