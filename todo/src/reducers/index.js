export const initialState =[
  {
    name: 'Abdi',
    completed: false,
    id: 12443
  }
  ]


export function toDoReducer  (state, action) {
    const newTask ={
        name: action.payload,
        completed: false,
        id:  Date.now()
        
      };
    
    switch(action.type) {
        case 'ADD_TASK' :
            return [...state, newTask];
        case 'TOGGLE_TASK' :
            return {...state, completed:!state.true};
        case 'CLEAR_COMPLETED_TASK':
            return state;
        default:
            return state;
    
    }
}