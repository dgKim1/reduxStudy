let initialState = {
    count: 0,
    id: "",
    passwd: ""
}


function reducer(state=initialState,action) {
    switch (action.type) {
        case "increase":
            return {...state,count : state.count + action.payload.num}
            break;
        case "login":
            return {...state, 
                id: action.payload.id,
                passwd: action.payload.passwd
            }
        case "decrease":
            return {
                ...state,
                count : state.count - action.payload.num
            }
        default:
            return {...state};
    }
}

export default reducer;