import React, { useState } from 'react'
import style from'./newTodo.module.css'


const NewTodo = (props) => {

    const [todo,setTodo] = useState({title:"",desc:""})

    const {title,desc} = todo;
    const handleChange =(e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo,[name]:e.target.value}
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTodos(todo)
        setTodo({title:'',desc:''})
    }
  return (
    <form className={style["form_field"]} onSubmit={handleSubmit} >
        <div>
            <label htmlFor="title">Title:</label>
            <input 
                type="text" 
                className={style.title} 
                id='title' name='title' 
                value={title} 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="desc">Description:</label>
            <textarea 
                type="text" 
                className={style.desc} 
                id='desc' 
                name='desc' 
                value={desc} 
                onChange={handleChange} 
            />
        </div>
        <button 
            type='submit' 
            className={style.submit}
            disabled={ title === '' ? true : desc === ''? true: false }
        >Add Todo
        </button>
    </form>
  )
}

export default NewTodo
