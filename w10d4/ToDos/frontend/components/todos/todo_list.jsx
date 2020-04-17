import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form.jsx';

const TodoList = ({ todos, receiveTodo }) => {
    return (
        <ul className='todolist'>
            {todos.map((todo,idx)=>{
                return(
                    <TodoListItem todo={todo} key={idx}/>
                )
            })}
            <TodoForm receiveTodo={receiveTodo}/>
        </ul>
    )
}


export default TodoList