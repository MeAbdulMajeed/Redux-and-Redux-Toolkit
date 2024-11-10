let state = {
    count: 0
}
let prevState = state
function increment (){
    // Mutating state
//    return state.count = state.count + 1

// Not mutating state
return state = {count: state.count + 1}
}
console.log(increment())
console.log(increment())
console.log(increment())