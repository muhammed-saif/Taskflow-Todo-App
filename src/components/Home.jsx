import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'
import dummyData from './dummyData.json'
import {v4 as uuid} from 'uuid'


const Home = () => {

  // const dummyData = [
  //   { id: uuid(),
  //     newTodo: {
  //       title: "Morning",
  //       desc: "Wake up at 8 AM"
  //   }},
  //   {  id: uuid(),
  //     newTodo: {
  //       title: "Night",
  //       desc:"Go to sleep at 11 PM"
  //   }
  // }]

    const [todos,setTodos] = useState(dummyData)

    const onAddTodoHandler = (newTodo) => {
      setTodos((oldTodos) => {
        return [...oldTodos,{id:uuid(),newTodo}]
      })
    }
    console.log(todos)
    const removeItem = (id) => {
      const filterTodos = todos.filter((todo) => todo.id !== id )
      setTodos(filterTodos)
    }

  return (
    <>
      <div className={style.container} >
        <h1 className={style.heading}>Todo App</h1>

          <NewTodo onAddTodos={onAddTodoHandler} />
          <Todos todos={todos} onRemoveTodo={removeItem}/>
      </div>
    </>
    
  )
}

export default Home
