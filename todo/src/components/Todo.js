import React from 'react'

const Todo = (props) => {
    const { dispatch } = props
    return (
        <div
        onClick={ () => dispatch({ 
            type: 'TOGGLE_COMPLETED', payload: props.item })}
        >
           <p>{props.item.name}</p> 
        </div>
        
    )
}

export default Todo;