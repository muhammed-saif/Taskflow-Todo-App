import React from 'react'
import style from './todo.module.css'
import { IoTrash } from 'react-icons/io5';

const Todo = (props) => {
   // console.log(props.todo) 
  const {id, newTodo} = props.todo
  const {title, desc} = newTodo


  const removeHandler = () => {
   props.onRemoveTodo(id)

  }
  return (
    <article className={style.todo} >
      <div>
        <h3 className={style.title}>{title}</h3>
        <p className={style.desc}>{desc}</p>
      </div>
      <button className={style.btn}>
        {/* <i className='fa-solid fa-trash'></i> */}
        <IoTrash className={style.trash} size={25} color='red' onClick={removeHandler}/>
      </button>
    </article>
  )
}

export default Todo
