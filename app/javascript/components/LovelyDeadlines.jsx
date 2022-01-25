import axios from "axios";
import React, {useState, useEffect} from "react";
import "../style/App.css";
import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

const LovelyDeadlines = () => {

    //console.log("count")
    
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        axios.get('api/v1/todos.json')
        .then( resp => {
            setTodos(resp.data.data)
        })
        .catch( resp => console.log(resp) )

    }, [todos.length]);

    

    let taglist = ["All", "Uncompleted", "Completed"];

    todos.map(todo => {
        let _tag = todo.attributes.tag;
        if(_tag !== "" && !taglist.includes(_tag)) {
            taglist.push(_tag);
        }
    });


    let options = taglist.map(tag => (
        <option key={tag} value={tag}>{tag}</option>
    ));



    useEffect(() => {
        //console.log("efae");
        filterHandler();
    }, [todos, status]);


    //Tag System
    const filterHandler = () => {

        if(status === 'All') {
            setFilteredTodos(todos);
        } else if(status === 'Uncompleted') {
            setFilteredTodos(todos.filter(todo => todo.attributes.completed === false));
        } else if(status === 'Completed') {
            setFilteredTodos(todos.filter(todo => todo.attributes.completed === true));
        } else if(status !== '') {
            setFilteredTodos(todos.filter(todo => todo.attributes.tag === status));
        } else {
            setFilteredTodos(todos);
        }


    }

    return(
        <div className="LovelyDeadlines">
            <header>
                <h1>Lovely Deadlines</h1>  
            </header>
                <h2 style={{textAlign: 'center'}}>
                Add Todos Here⬇ &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Filter
                </h2>
            <CreateForm 
                todos={todos}
                //inputText={inputText}
                setTodos={setTodos}
                //setInputText={setInputText}
                setStatus={setStatus}
                options={options}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
            />
            <footer style={{textAlign: 'center'}}>
                <br />Copyright © 2022 WU HAOHUI
            </footer>
        </div>
    );
};

export default LovelyDeadlines;