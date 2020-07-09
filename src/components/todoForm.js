import React from 'react'
import styled from 'styled-components'
import '../App.css'

const Button = styled.button`
background: #5cb85c;
// border-radius: 3px;
width: 28%;
height: 6.5vh;
border: none;
color: white;
padding: 3px;
outline: none;
cursor: pointer;
@media(max-width:412px){
    width:72%;
    height: 5vh;
}
`

const Form = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className="todo-form">
            <input type="text" name="todoNote" placeholder="Enter to do..." 
            onChange={props.handleInputChange} 
            value={props.todoNote}
            />
            <Button type="submit" name="submit" disabled={props.todoNote === "" ? true : false}>Add</Button>
        </form>
    )

}

export default Form;
