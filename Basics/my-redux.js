export function myCreateStore(reducer){
    let state
    const listners = []
    const store = {
        getState(){
            return state
        },
        dispatch(action){
            state = reducer(state, action)
            listners.forEach((listner)=>{
                listner()
            })
        },
        subscribe(listner){
            listners.push(listner)
        }
    }
    // store.dispatch({type: "init"})
    return store
}