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

export function testFetch(){
    // fetch login
    console.log('fetch')
    return dispatch => {
        fetch('../mock/package.json',{
            method: 'get'
        })
            .then((response) => {
                // 持久化
                Storage.clear()
                console.log(response)


            })
            .then((data)=>{
                console.log(data)
            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }

}
