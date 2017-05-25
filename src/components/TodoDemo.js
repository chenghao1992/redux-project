import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import './../css/antd.min.css';
import './../css/layout.css';
const TodoDemo = () => (
  <div style={{height:"100%"}}>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export default TodoDemo
