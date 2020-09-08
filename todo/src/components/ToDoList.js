import React from 'react';
import Todo from './Todo.js'

const TodoList = (props) => {



    return(
        <div>
            {props.tasks.map((item) => (
              <Todo 
              key={item.id}
              item={item}
              dispatch={props.dispatch}
              
              
              
              />  
            ))}
            
                
        </div>
    )
}

export default TodoList;