import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// 混合组件
let AddTodo = ({ dispatch}) => {
  // console.log("AddTodo:",AddTodo)
  // console.log("dispatch:",dispatch)
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={v => {
          input = v
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
