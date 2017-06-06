/**
 * Created by 12718 on 2017/5/28.
 */
import React from 'react'
import DefaultPage from '../containers/defaultPage'

 const TestOwnProps=()=>(
     <div>
         <DefaultPage testownProps="组件引用时传入，用了路由之后好像无法赋值了">
             <div className="DefaultPage-children">
                 DefaultPage的children，需要显示引用才可以，放在路由里就不知道了
                 <p>
                     <span>看看能不能包含多个层级</span>
                 </p>
             </div>
         </DefaultPage>
     </div>
 )

export default TestOwnProps;