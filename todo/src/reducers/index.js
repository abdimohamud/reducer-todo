export const initialState ={
  todoList:[

    {
      name: 'Abdi',
      completed: false,
      id: 12345
    },
    {
      name: 'Do dishes',
      completed: false,
      id: 67890
    },

  ]
 
}



export function toDoReducer  (state, action) {
    const newTask ={
        name: action.payload,
        completed: false,
        id:  Date.now()
        
      };
    
    switch(action.type) {
      case 'TOGGLE_COMPLETED':
        return {
            ...state,
            todoList: state.todoList.map(item => {
                if (item.id == action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
        }
      case 'ADD_TASK' :
          return {
            ...state,
            todoList:[...state.todoList, newTask]
            };
     
      case 'CLEAR_COMPLETED_TASK':
            return state;
      default:
        return state;
       
    
    }
}