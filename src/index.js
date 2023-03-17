import {createStore} from 'redux'

// reducer
const reducer = function(state={amount:0}, action){
    switch(action.type){
        case "INCREMENT":
            return {amount: state.amount + action.payload}
        case "DECREMENT":
            return {amount: state.amount - action.payload}
        default:
            break
    }
    return state
}
// store - create subscribe
const store = createStore(reducer)
store.subscribe(function(){
    console.log(store.getState());
})
// dispatch
setInterval(()=>{
    store.dispatch({type:"INCREMENT", payload:1})
}, 2000)

