import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';


const UpdateForm = ({state, setState, url}) => {

    const navigateTo = useNavigate();

    const handleTitleChange = (e) => {
        setState({...state, title: e.target.value})
    }

    const handleDescriptionChange = (e) => {
        setState({...state, description: e.target.value})
    }

    const handleDeadlineChange = (e) => {
        setState({...state, deadline: e.target.value})
    }

    const handleTagChange = (e) => {
        setState({...state, tag: e.target.value})
    }

    const handleSubmit = () => {
        axios.patch(url, state);
    }


    return (
            <form onSubmit={handleSubmit}>
                <Stack width="1000px" spacing={3}>
                    <TextField 
                        id='title' 
                        label='Title'  
                        InputLabelProps={{ shrink: true }} 
                        value={state.title} 
                        onChange={handleTitleChange}
                        fullWidth
                        variant='filled'
                        required
                        style={{background: '#F0F0F0'}} 
                    />


                    <TextField 
                        id='description' 
                        label='Description' 
                        value={state.description} 
                        InputLabelProps={{ shrink: true }} 
                        value={state.description} 
                        onChange={handleDescriptionChange}
                        fullWidth
                        variant='filled'
                        style={{background: '#F0F0F0'}} 
                    />
                        
                    <TextField 
                        id='deadline' 
                        label='Deadline' 
                        value={state.deadline}
                        InputLabelProps={{ shrink: true }} 
                        value={state.deadline} 
                        onChange={handleDeadlineChange}
                        fullWidth
                        variant='filled'
                        style={{background: '#F0F0F0'}} 
                    />
                        
                    <TextField 
                        id='tag' 
                        label='Tag' 
                        value={state.Tag}
                        InputLabelProps={{ shrink: true }} 
                        value={state.tag} 
                        onChange={handleTagChange}
                        fullWidth
                        variant='filled'
                        style={{background: '#F0F0F0'}} 
                    />

                    <div>Notice: Please wait for a few seconds before clicking update to allow system to record your change.</div>
                        
                    <Button color='success' variant='contained' type='submit'>
                        Update
                    </Button>

                    <Button color='error' variant='outlined' onClick={() => navigateTo('/')}>
                        Discard change and Go back to main page.
                    </Button>
                </Stack>

            </form>
        
    )
}

export default UpdateForm;