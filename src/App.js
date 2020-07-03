import React from 'react'
import TodoItem from './components/TodoItem'
import shortid from "shortid";
import Form from './components/todoForm'
import './App.css'

class App extends React.Component {
  state = {
    todos: [],
    todoNote: ""
  }

  handleInputChange = (e) => {
    this.setState({
       todoNote : e.target.value
       })
 }
// testing testing testing
handleSubmit = (e) => {
  e.preventDefault()
  this.setState({
    todos: [
      {
        id: shortid.generate(),
        text: this.state.todoNote,
        completed: false
    },
    ...this.state.todos,   
    ],
    todoNote: ""
  })
}

  handleCheckChange = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
      
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const {todoNote} = this.state;
    const todoItems = this.state.todos.map((eachItem) => <TodoItem key={eachItem.id} 
      eachItem={eachItem} handleChange={this.handleCheckChange} /> )

    return (
      <div className="todo-list">
        <Form todoNote={todoNote} 
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        />
        {todoItems}
        
      </div>
    )
  }

}

export default App;
