import React, { useState } from 'react'
import TodoItem from './components/TodoItem'
import shortid from "shortid";
import Form from './components/todoForm'
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([])
    const [todoNote, setTodoNote] = useState('')

    const handleInputChange = (e) => {
        setTodoNote(e.target.value)
     }

    // This handles the action when you click the 'add' button
    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([ {
                id: shortid.generate(),
                text: todoNote,
                completed: false
                   },
            ...todos,
         ])
         setTodoNote("")
    }

    // This handles the action when you check/uncheck the box
    const handleCheckChange = (id) => {
        console.log(id)
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){  
                todo.completed= !todo.completed   
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const todoItems = todos.map(eachItem => <TodoItem key={eachItem.id} 
    eachItem={eachItem} handleChange={handleCheckChange} /> )

    return (
      <div className="todo-list">
        <Form todoNote={todoNote} 
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
        />
        <p>{todoNote}</p>
            {todoItems}  
      </div>
    )
}

export default App;