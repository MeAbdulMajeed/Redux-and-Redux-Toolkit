import { createStore } from "redux"
import { myCreateStore } from "./my-redux"
let initialState = {
    name: 'Majeed',
    post: 1,
    age: 23,
    education: 'Bachelors',
    city: 'Karachi'
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'increment':
            return {...state, post: state.post + 1}
        case 'decrement':
            return {...state, post: state.post -1}
        case 'increaseBy':
            return {...state, post: state.post + action.payload}
        case 'decreaseBy':
            return {...state, post: state.post - action.payload}
        default:
            return state
    }

}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// working with my my-redux
const myStore = myCreateStore(reducer)
console.log("my store",myStore)


console.log(store)
console.log('store',store.getState())

// we dont' need to console log after every dispatch to see the changes in the state 
// instead we can use subscribe method which will automatically run when the state changes
myStore.subscribe(()=>{
    console.log(myStore.getState())
})

// These are called action dispatching dispatching
myStore.dispatch({type: 'increment'})
myStore.dispatch({type: 'decrement'})
myStore.dispatch({type: 'increaseBy', payload: 10})
myStore.dispatch({type: 'decreaseBy', payload: 5})