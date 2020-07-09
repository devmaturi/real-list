import React from 'react'
import '../App.css'

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="todo-form">
            <input type="text" name="todoNote" placeholder="Enter to do..." 
            onChange={props.handleInputChange} 
            value={props.todoNote}
            />
            <button type="submit" name="submit" disabled={props.todoNote === "" ? true : false} >Add</button>
        </form>
    )

}

export default Form;
