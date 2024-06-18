import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_TASKS = 'SET_TASKS';

const API_URL = 'http://localhost:8080/v1/task';

export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks
});


export const fetchTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/getAll`);
        console.log('tasks',response.data)
        dispatch(setTasks(response.data));
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};

export const addTask = (task) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_URL}/add`, task);
        dispatch({
            type: ADD_TASK,
            payload: response.data
        });
    } catch (error) {
        console.error('Error adding task:', error);
    }
};

export const removeTask = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/delete/${id}`);
        dispatch({
            type: REMOVE_TASK,
            payload: id
        });
    } catch (error) {
        console.error('Error removing task:', error);
    }
};

export const editTask = (updatedTask) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/replace`, updatedTask);
        dispatch({
            type: EDIT_TASK,
            payload: {updatedTask: response.data }
        });
    } catch (error) {
        console.error('Error editing task:', error);
    }
};
