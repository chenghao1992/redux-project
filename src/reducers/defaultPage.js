/**
 * Created by 12718 on 2017/5/28.
 */
const defaultStatus={
    a:11111,
    b:'hello world'
}
const defaultPage = (state =defaultStatus, action) => {
//这里面的state是defaultPage独享的，和containers 里面的不一样
    console.log(action)
    console.log('defaultStatus----',state)
    switch (action.type) {
        case 'changeStatus':
            return {
                ...state,
                b:action.status,
            }
        case 'changeTest1':
            return {
                ...state,
                a:action.a
            }
        case 'asyncTest':
            return{
                ...state,
                ...action.data
            }
        default:
            return {
                ...state
            }
    }
}

export default defaultPage
