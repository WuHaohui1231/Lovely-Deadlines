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
            setState(resp.data.data.attributes);
        });
    }, [])


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
            <footer style={{textAlign: 'center'}}>
                <br />Copyright © 2022 WU HAOHUI
            </footer>
            
            
        </div>
        
    );
};

export default TodoPage;
