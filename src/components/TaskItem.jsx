import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../actions/taskActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import { Badge } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TaskItem = ({ task, setEditMode, setCurrentTask }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTask(task.id));
    };

    const handleEdit = () => {
        setCurrentTask(task);
        setEditMode(true);
    };

    return (
        <ListGroup.Item
             as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{task.name}</div>
                <span>{task.description}</span>
            </div>
            
            <Row className="d-flex flex-column">
                <Col><Badge bg={task.valid ? 'success' : 'warning'} pill>{task.id}</Badge></Col>
                <Col className="p-1">
                    <Button onClick={handleEdit} size='sm'>Editar</Button>
                </Col>
                <Col className="p-1">
                    <Button onClick={handleRemove} className='btn-warning ml2' size='sm'>Eliminar</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default TaskItem;
