import React from 'react';
import { FilterValueType, TaskType } from './App';

type TodoListPropsType = {
  title: string;
  task: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (filter: FilterValueType) => void;
  filter: FilterValueType;
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
        <button onClick={() => props.changeFilter('all')}>All</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        <button onClick={() => props.changeFilter('completed')}>Completed</button>
      </div>
    </div>
  );
};
