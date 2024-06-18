import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskForm from '../components/TaskForm';

/*
* Nota: No poseo mucha experiencia en pruebas 
* unitarias en React, pero estoy dispuesto a aprender
*/

const mockStore = configureStore([]);
let store;

describe('TaskForm', () => {
  let setEditMode, setCurrentTask;

  beforeEach(() => {
    store = mockStore([]);
    setEditMode = jest.fn();
    setCurrentTask = jest.fn();
  });

  test('renders form with initial state', () => {
    const currentTask = { name: '', description: '', valid: true };

    render(
      <Provider store={store}>
        <TaskForm
          editMode={false}
          currentTask={currentTask}
          setEditMode={setEditMode}
          setCurrentTask={setCurrentTask}
        />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Task_name')).toBeInTheDocument();
    expect(screen.getByText('add_name')).toBeInTheDocument();
  });

});
