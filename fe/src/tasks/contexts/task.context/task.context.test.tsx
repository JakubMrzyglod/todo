import { fireEvent, render, screen } from '@testing-library/react';

import { TasksProvider, useTasksContext } from '.';

describe('TasksProvider', () => {
  const task = { id: 1, content: 'New Task', done: false };

  const TasksContextConsumer = () => {
    const { tasks, addTask, doneTask, dropTask } = useTasksContext();
    return (
      <div>
        <div data-testid="tasks-context">Tasks: {JSON.stringify(tasks)}</div>
        <button data-testid="add-task-button" onClick={() => addTask(task)}>
          Add Task
        </button>
        <button data-testid="done-task-button" onClick={() => doneTask(1)}>
          Done Task
        </button>
        <button data-testid="drop-task-button" onClick={() => dropTask(1)}>
          Done Task
        </button>
      </div>
    );
  };

  it('should render the tasks context with the correct default value', () => {
    render(
      <TasksProvider>
        <TasksContextConsumer />
      </TasksProvider>,
    );

    expect(screen.getByTestId('tasks-context')).toHaveTextContent('Tasks:');
  });

  it('should add a task when addTask is called', () => {
    render(
      <TasksProvider>
        <TasksContextConsumer />
      </TasksProvider>,
    );

    const addTaskButton = screen.getByTestId('add-task-button');

    fireEvent.click(addTaskButton);

    expect(screen.getByTestId('tasks-context')).toHaveTextContent(
      'Tasks: [{"id":1,"content":"New Task","done":false}]',
    );
  });

  it('should drop a task when dropTask is called', () => {
    render(
      <TasksProvider {...{ tasks: [task] }}>
        <TasksContextConsumer />
      </TasksProvider>,
    );

    const addTaskButton = screen.getByTestId('drop-task-button');

    fireEvent.click(addTaskButton);

    expect(screen.getByTestId('tasks-context')).toHaveTextContent('Tasks: []');
  });

  it('should done a task when doneTask is called', () => {
    render(
      <TasksProvider {...{ tasks: [task] }}>
        <TasksContextConsumer />
      </TasksProvider>,
    );

    const addTaskButton = screen.getByTestId('done-task-button');

    fireEvent.click(addTaskButton);

    expect(screen.getByTestId('tasks-context')).toHaveTextContent(
      'Tasks: [{"id":1,"content":"New Task","done":true}]',
    );
  });
});
