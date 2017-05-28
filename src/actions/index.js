let nextTodoId = 0
export const addTodo = (text) =>{
  console.log("text:",text)
  return ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  })
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const changeStatus=(status)=>({
    type:'changeStatus',
    status
})

export const changeTest1=(a)=>({
    type:'changeTest1',
    a
})
