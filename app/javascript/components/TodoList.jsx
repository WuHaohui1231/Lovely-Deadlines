import { TextField, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const TodoList = (props) => {


    const [searchInput, setSearchInput] = useState("");

    const SearchHandler = (e) => {
        setSearchInput(e.target.value);
    }

    useEffect(
        () => {
            props.setFilteredTodos(props.todos.filter((todo) => (
                todo.attributes.title.toLowerCase().includes(searchInput.toLowerCase()) || 
                todo.attributes.description.toLowerCase().includes(searchInput.toLowerCase()) ||
                todo.attributes.deadline.toLowerCase().includes(searchInput.toLowerCase()) ||
                todo.attributes.tag.toLowerCase().includes(searchInput.toLowerCase())
            )))
        },
        [searchInput]
    )


    return (
        <div>
        <div>
            <Grid container>
                <Grid item xs={5.35} />
                <TextField 
                    variant='outlined' 
                    label='Search Todo' 
                    onChange={SearchHandler} 
                    value={searchInput} 
                    style={{background: '#F0F0F0'}} 
                />
            </Grid>
        </div>
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos
                .sort((a, b) => (a.attributes.completed - b.attributes.completed)) //To display uncompleted todo first
                .map(todo => (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        todos={props.todos}
                        setTodos={props.setTodos}
                    />
                ))
                }
            </ul>
        </div>
        </div>
    )
}

export default TodoList;