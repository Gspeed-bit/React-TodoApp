import React from 'react'
import Todolist from "./Component/Todo-list"
import './App.css';
import TodosData from './Component/TodosData';

function App() {

const todoItems = TodosData.map(item=>
  <Todolist key= {item.id} item={item} />
  )

  return (
    <div className="todo-list">
  {todoItems}
      
    </div>
  )
}

export default App

