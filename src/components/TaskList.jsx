import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskList = ({ setEditMode, setCurrentTask }) => {
    const tasks = useSelector(state => state.taskReducer.tasks);

    return (
        <ListGroup>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    setEditMode={setEditMode} 
                    setCurrentTask={setCurrentTask} 
                />
            ))}
        </ListGroup>
    );
};

export default TaskList;