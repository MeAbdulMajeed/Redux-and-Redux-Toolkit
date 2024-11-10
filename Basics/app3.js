import { createStore } from "redux"
let initialState = {
    name: 'Majeed',
    post: 1,
    age: 23,
    education: 'Bachelors',
    city: 'Karachi'
}

function reducer(state = initialState, action){
    if(action.type === 'increment'){
        return {...state, post: state.post + 1}
    }
    else if(action.type === 'decrement'){
        return {...state, post: state.post -1}
    }
    else if(action.type === 'incrementBy'){
        return {...state, post: state.post + action.payload}
    }
    return state

}

const store = createStore(reducer)
console.log(store)
console.log('store',store.getState())

// we dont' need to console log after every dispatch to see the changes in the state 
// instead we can use subscribe method which will automatically run when the state changes
store.subscribe(()=>{
    console.log(store.getState())
})

// These are called action dispatching dispatching
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
store.dispatch({type: 'incrementBy', payload: 10})