import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UpdateForm from './UpdateForm';

const TodoPage = () => {

    const {slug} = useParams();
    const url = '/api/v1/todos/' + slug;
    const [state, setState] = useState({});

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            //console.log(resp.data.data.attributes);
            setState(resp.data.data.attributes);
        });
    }, [])

    // const updatedTodo = {
    //     title: 'Reset',
    //     description: 'Test',
    //     tag: '',
    //     completed: true,
    //     deadline: 'faefget'
    // }

    // const test = () => {
    //     axios.patch(url, updatedTodo);
    // }

    // const _title = await this.state.title;
    // const _title_ = _title.slice();

    // //To avoid the issue that heading change when editing
    // console.log(state.title)

    return(
        <div>
            <header>
            <h2>
                {state.title}
            </h2>
            </header>
            <UpdateForm 
                state={state}
                setState={setState}
                url={url}
            />

            
            
        </div>
        
    );
};

export default TodoPage;
