import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'
import './App.css'

class App extends React.Component {
  state = {
    todos: todosData
  }
// testing testing testing
  handleChange = (id) => {
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
    const todoItems = this.state.todos.map(eachItem => <TodoItem key={eachItem.id} 
      eachItem={eachItem} handleChange={this.handleChange} /> )
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }

}

export default App;
