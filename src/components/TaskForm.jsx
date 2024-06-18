import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../actions/taskActions';
import Button from 'react-bootstrap/Button'
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Description from './Description';


const TaskForm = ({ editMode, currentTask, setEditMode, setCurrentTask }) => {
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }else{
            e.preventDefault();
            if (editMode) {
                dispatch(editTask(currentTask));
                setEditMode(false);
            } else {
                dispatch(addTask({ 
                    id: null, 
                    name: currentTask.name, 
                    description : currentTask.description 
                }));
            }
            setCurrentTask({}); 
        }
        
    };

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Badge bg={currentTask.valid ? 'success' : 'warning'} className='mb-4'>
                {currentTask.id ? `Id: ${currentTask.id}` : ''}
            </Badge>
            <Form.Group className="mb-3">
                <Form.Control
                    required
                    type="text"
                    placeholder="Nombre de la tarea"
                    aria-label="Nombre de la tarea"
                    aria-describedby="basic-addon1"
                    value={currentTask.name || ""}
                    onChange={(e) => setCurrentTask({ ...currentTask, name: e.target.value })}
                />
            </Form.Group>
            <Description 
                value={currentTask.description || ""}
                onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
            />
            <Button type="submit" className='primary'>
                {editMode ? 'Modificar tarea' : 'Agregar tarea'}
            </Button>
        </Form>
    );
};

export default TaskForm;
