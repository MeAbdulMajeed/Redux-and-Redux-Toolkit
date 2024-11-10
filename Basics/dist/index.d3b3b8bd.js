let state = {
    name: "Majeed",
    post: 1,
    age: 23,
    education: "Bachelors",
    city: "Karachi"
};
function reducer(state, action) {
    if (action.type === "increment") return {
        ...state,
        post: state.post + 1
    };
    else if (action.type === "decrement") return {
        ...state,
        post: state.post - 1
    };
    else if (action.type === "incrementBy") return {
        ...state,
        post: state.post + action.payload
    };
    return state;
}
// What redux will do
state = reducer(state, {
    type: "increment"
});
console.log("increment", state);
state = reducer(state, {
    type: "decrement"
});
console.log("decrement", state);
state = reducer(state, {
    type: "abc"
});
console.log("abc", state);
state = reducer(state, {
    type: "incrementBy",
    payload: 10
});
console.log("incrementBy", state);

//# sourceMappingURL=index.d3b3b8bd.js.map
