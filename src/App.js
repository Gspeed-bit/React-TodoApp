import React, {Component} from 'react'

import Todolist from "./Component/Todo-list"
import './App.css';
import TodosData from './Component/TodosData';


class App extends Component {
  constructor() {
      super()
      this.state = {
          todos: TodosData
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id) {
                  return {
                      ...todo,
                      completed: !todo.completed
                  }
              }
              return todo
          })
          console.log(prevState.todos)
          console.log(updatedTodos)
          return {
              todos: updatedTodos
          }
      })
  }
  
  render() {
      const todoItems = this.state.todos.map(item => <Todolist key={item.id} item={item} handleChange={this.handleChange}/>)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}

export default App