export const initialState ={
    name: '',
    id: Date.now(),
    completed: false
}

export const toDoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK' :
            return state;
        case 'TOGGLE_TASK' :
            return state;
        default:
            return state;
    
    }
}