import React from 'react';
import './App.css';
import { TodoList } from './Todolist';

export type TaskType = {
  title: string;
  isDone: boolean;
  id: number;
};

//G-R-UD

function App() {
  //BLL

  const todoListTitle1: string = 'What to learn';
  const totoListTitle2: string = 'What to buy';
  const task_1: Array<TaskType> = [
    { title: 'HTML&CSS', isDone: true, id: 1 },
    { title: 'JS', isDone: true, id: 2 },
    { title: 'React', isDone: true, id: 3 },
  ];
  const task_2: Array<TaskType> = [
    { title: 'CHAMPAGNE', isDone: true, id: 4 },
    { title: 'BEER', isDone: true, id: 5 },
    { title: 'FISH', isDone: true, id: 6 },
  ];
  //UI

  return (
    <div className="App">
      <TodoList title={todoListTitle1} task={task_1} />
      <TodoList title={totoListTitle2} task={task_2} />
    </div>
  );
}

export default App;
