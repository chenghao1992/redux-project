import { connect } from 'react-redux'
import { toggleTodo,setVisibilityFilter } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
// 使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中

const mapStateToProps = (state) => ({
  // 这里面的state是整个状态树对象
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  test:'test-mapDispatchToProps',
  myCons:(params)=>{
    console.log(params)
  }
})
/*
除了读取 state，容器组件还能分发 action。类似的方式，可以定义 mapDispatchToProps() 方法
接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。
*/
const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  setVisibilityFilter,
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
