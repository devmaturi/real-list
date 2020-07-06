import React from 'react';
import '../App.css'

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "grey",
    textDecoration: "line-through"
}

  return (
    <div className="todo-item">
        <input type="checkbox" 
        checked={props.eachItem.completed}
        onChange={() => props.handleChange(props.eachItem.id)}
        />
        <p style={props.eachItem.completed ? completedStyle : null}>{props.eachItem.text}</p>
    </div>
  );
}

export default TodoItem;
