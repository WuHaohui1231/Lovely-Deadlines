import axios from 'axios';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Todo = (props) => {



    const slug = props.todo.attributes.slug;
    const url = "api/v1/todos/" + slug;

    const navigateTo = useNavigate();

    const deleteHandler = () => {
        axios.delete(url)
        .then(() => props.setTodos(props.todos.filter(todo => todo.attributes.slug !== slug)));

    }

    const completeHandler = () => {
        //console.log("efa");
        let _todo = props.todo;
        let _todo_attributes = _todo.attributes
        _todo_attributes = {
            ..._todo_attributes,
            completed: !_todo_attributes.completed
        }
        _todo = {
            ..._todo,
            attributes: _todo_attributes,
        }
        
        //axios.get(url).then(resp => console.log(resp));
        axios.patch(url, _todo_attributes)
        .then(() => {
            let _todos = props.todos.map(todo => {
                if(todo.attributes.slug == slug) {
                    return _todo
                } else {
                    return todo;
                }
            });
            props.setTodos(_todos)
            

        });
    }
    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.attributes.completed ? "completed" : ""}`}>
                {props.todo.attributes.title}<br />
                <div style={{fontSize:'1rem'}}>Due: {props.todo.attributes.deadline}</div>
            </li>
            <Button variant="contained" onClick={() => navigateTo('/todos/' + slug)} size='small' color='success' size='large'>
                Details <br /> & Edit
            </Button>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;