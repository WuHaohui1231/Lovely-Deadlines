import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateForm = (props) => {

    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputDeadline, setInputDeadline] = useState("");
    const [inputTag, setInputTag] = useState("");

    const refresh = () => {
        window.location.reload();
    }

    const inputTitleHandler = (e) => {
        setInputTitle(e.target.value);
    }

    const inputDescriptionHandler = (e) => {
        setInputDescription(e.target.value);
    }

    const inputDeadlineHandler = (e) => {
        setInputDeadline(e.target.value);
    }

    const inputTagHandler = (e) => {
        setInputTag(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();

        let newTodo = {
            title: inputTitle,
            deadline: inputDeadline,
            description: inputDescription,
            tag: inputTag,
            completed: false
        }

        axios.post('api/v1/todos', newTodo)
        .then(refresh);

        setInputTitle("");
        setInputDescription("");
        setInputDeadline("");
        setInputTag("");
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    }


    


    return(
        
        <form>

            <ul>
            <li>
                <input value={props.inputText} onChange={inputTitleHandler} placeholder="title" type="text" className="title-input" />
            </li>
            <li>
                <input value={props.inputText} onChange={inputDescriptionHandler} placeholder="description" type="text" className="description-input" /> 
                
            </li>
            <li>
                <input value={props.inputText} onChange={inputDeadlineHandler} placeholder = "deadline" type="text" className="description-input" />
            </li>
            <li>
                <input value={props.inputText} onChange={inputTagHandler} placeholder = "tag" type="text" className="description-input" />
            </li>
            </ul>

            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>



            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                {props.options}
                </select>
            </div>
        </form>
    )
}

export default CreateForm;

