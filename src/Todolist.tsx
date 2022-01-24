import React from 'react';
import { FilterValueType, TaskType } from './App';

type TodoListPropsType = {
  title: string;
  task: Array<TaskType>;
  removeTask: (id: number) => void;
  setFilter: (filter: FilterValueType) => void;
};

export const TodoList = (props: TodoListPropsType) => {
  const tasksElements = props.task.map(task => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
        <button onClick={() => props.removeTask(task.id)}>x</button>
      </li>
    );
  });

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>{tasksElements}</ul>
      <div>
        <button onClick={() => props.setFilter('all')}>All</button>
        <button onClick={() => props.setFilter('active')}>Active</button>
        <button onClick={() => props.setFilter('completed')}>Completed</button>
      </div>
    </div>
  );
};
