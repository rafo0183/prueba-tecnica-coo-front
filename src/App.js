import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from './actions/taskActions';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    const [editMode, setEditMode] = useState(false);
    const [currentTask, setCurrentTask] = useState({name: '', description : ''});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <Container>
            <Row>
                <Col xs md="12">
                    <h1>Prueba técnica</h1>
                    <h4>Ricardo Fuentes</h4>
                </Col>
            </Row>
            <Row>
                <Col xs md="6">
                    <TaskForm 
                        editMode={editMode} 
                        currentTask={currentTask} 
                        setEditMode={setEditMode}
                        setCurrentTask={setCurrentTask} 
                    />
                    <div>
                        <hr />
                        <i>Nota: El backend fue modificado y se utiliza soft-delete para las task en BD</i>
                    </div>
                </Col>
                <Col xs md="6">
                    <TaskList 
                        setEditMode={setEditMode} 
                        setCurrentTask={setCurrentTask} 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default App;