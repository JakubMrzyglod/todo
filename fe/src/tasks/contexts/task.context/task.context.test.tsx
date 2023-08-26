import { fireEvent, render, screen } from '@testing-library/react';
import { Task } from '@tasks/types';

import { TasksProvider, useTasksContext } from '.';

describe('dropItem', () => {
  test('should remove a task from the tasks list', () => {
    const TestComponent = () => {
      const { tasks, dropItem } = useTasksContext();
      return (
        <div>
          {tasks?.map((task) => (
            <div key={task.id} data-testid={`task-${task.id}`}>
              {task.content}
              <button onClick={() => dropItem(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      );
    };

    const tasks = [
      { id: 1, content: 'Task 1', done: false },
      { id: 2, content: 'Task 2', done: false },
      { id: 3, content: 'Task 3', done: false },
    ];

    render(
      <TasksProvider tasks={tasks}>
        <TestComponent />
      </TasksProvider>,
    );

    const [deleteButton] = screen.getAllByText('Delete');
    fireEvent.click(deleteButton);

    expect(screen.queryByTestId('task-1')).toBeNull();
  });
});

describe('addItem', () => {
  test('should remove a task from the tasks list', () => {
    const TestComponent = () => {
      const { tasks, addItem } = useTasksContext();
      return (
        <>
          <button onClick={() => addItem(newTask)}>Add Item</button>
          {tasks?.map((task) => (
            <div key={task.id} data-testid={`task-${task.id}`}>
              {task.content}
            </div>
          ))}
        </>
      );
    };

    const newTask = { id: 1, content: 'Test content', done: false };

    const tasks: Task[] = [];

    render(
      <TasksProvider tasks={tasks}>
        <TestComponent />
      </TasksProvider>,
    );

    const addItemButton = screen.getByText('Add Item');
    fireEvent.click(addItemButton);

    expect(screen.queryByTestId('task-1')).not.toBeNull();
  });
});
