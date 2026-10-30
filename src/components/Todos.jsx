import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'

const Todos = (props) => {


    const todoElement = props.todos.map((todo) => ( <Todo key={todo.id} todo={todo} onRemoveTodo={props.onRemoveTodo} />))

  return (
    <section className={style.todosContainer} >
      {todoElement}
    </section>
  )
}

export default Todos
