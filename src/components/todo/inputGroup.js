import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addtodoApi } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
// import '../../styles/style.scss';


const InputGroup = (props) => {
    const { token } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({ title: "", description: "" });

    const handleTitle = (event) => {
        const newTodo = { ...todo };
        newTodo.title = "";
        newTodo.title = event.target.value;
        setTodo(newTodo);
    }
    const handleDescription = (event) => {
        const newTodo = { ...todo };
        newTodo.description = "";
        newTodo.description = event.target.value;
        setTodo(newTodo);
    }

    const handleSubmit = () => {
        // dispatch(addtodo(todo));
        console.log(token);
        dispatch(addtodoApi(todo, token));
    }


    return (
        <>
            {/* <Box
                sx={{ display: 'flex', flexWrap: 'wrap' }}
                noValidate
                autoComplete="off"
            > */}
            <form>
                <Paper>
                    <Grid container spacing={1} >
                        <Grid item md={5} xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Enter title"
                                variant="outlined"
                                fullWidth
                                name="title"
                                value={todo.title}
                                onChange={handleTitle}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Enter Description"
                                fullWidth
                                variant="outlined"
                                name="description"
                                value={todo.description}
                                onChange={handleDescription}
                            />
                        </Grid>
                        <Grid item md={1} xs={12}>
                            <Button
                                variant="contained"
                                type="button"
                                onClick={handleSubmit}
                                size="large"
                            >Add
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>

        </>
    )
}
export default InputGroup;