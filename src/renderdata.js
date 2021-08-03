import React from 'react'

export const Render = (props) => {
    return (
        <div className="todo-item">
            <p> Name : {props.item.name}</p>
            <p> Email : {props.item.email}</p>
            <p> Phone : {props.item.phone}</p>
            <button onClick={props.fun1}> Delet</button>
            <button onClick={props.fun2}> Edit</button>
        </div>
    )
}
