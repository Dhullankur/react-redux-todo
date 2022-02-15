import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import InputGroup from './inputGroup';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ModalBox from '../modal/modal';
import { addtodo, deleteTodoApi } from '../store/actions';
import { editedtodoData, getAllToDo } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import Header from '../navigation/header';

const TodoHome = () => {
    const AllTodos = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [checked, setChecked] = useState(false)
    // const [index, setIndex] = useState(null);
    const [id, setId] = useState(null);

    const handleEdit = (id) => {
        // setIndex(index)
        setId(id);
        console.log(id);
        setOpenModal(true)
    };

    const handleModalClose = (todo) => {
        // console.log(props.editedTODO)
        setId(null);
        setOpenModal(false);

    }

    const handleCheckBox = (event) => {
        // setChecked(event.target.checked);
        // console.log(event.target)
    }
    // const handleSaveChanges = (props) => {
    // dispatch(editedtodoData(props.editedTODO, index));
    // setIndex(null);
    // }

    const handleDelete = (id) => {
        dispatch(deleteTodoApi(id));
    }

    useEffect(() => {
        if (AllTodos.todos.length === 0) {
            console.log(AllTodos.todos)
            dispatch(getAllToDo());
        }
    }, [AllTodos, dispatch]);

    return (
        <>
            <Header />
            <div className='container'>
                <InputGroup />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 200 }} ms={{ width: 150 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                    />
                                </TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AllTodos ?
                                AllTodos.todos.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell padding="checkbox"><Checkbox color="primary"
                                            checked={checked}
                                            onChange={handleCheckBox}
                                        /></TableCell>
                                        <TableCell align="center"> {item.title}</TableCell>
                                        <TableCell align="center"> {item.description} </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                type="button"
                                                onClick={() => handleEdit(item.id)}
                                            >Edit
                                            </Button>
                                            <Button
                                                variant="contained"
                                                type="button"
                                                onClick={() => handleDelete(item.id)}
                                                color="warning"

                                            >Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))

                                : null}


                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* {openModal && <ModalBox title={AllTodos.todos[index]?.title} description={AllTodos.todos[index]?.description}
                showModal={openModal}
                handleClose={handleModalClose}
                handleEdit={handleEdit}
            // handleSaveChangesBtn={handleSaveChanges}
            />} */}
            {openModal && <ModalBox todo={AllTodos.todos.find(item => item.id === id)}
                showModal={openModal}
                handleClose={handleModalClose}
                handleEdit={handleEdit}
            // handleSaveChangesBtn={handleSaveChanges}
            />}
        </>
    );
}
export default TodoHome;