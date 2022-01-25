import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { TodoList } from './Todolist';

export type TaskType = {
  title: string;
  isDone: boolean;
  id: string;
};

export type FilterValueType = 'all' | 'active' | 'completed';

//G-R-UD

function App() {
  //BLL
  const todoListTitle1: string = 'What to learn';

  const [filter, setFilter] = useState<FilterValueType>('all');
  const [task, setTask] = useState<Array<TaskType>>([
    { title: 'HTML&CSS', isDone: true, id: v1() },
    { title: 'JS/TS', isDone: false, id: v1() },
    { title: 'React', isDone: true, id: v1() },
  ]);

  const removeTask = (id: string) => {
    setTask(task.filter(list => list.id !== id));
  };

  const changeFilter = (filter: FilterValueType) => setFilter(filter);

  const addTask = () => {
    const newTask: TaskType = {
      title: 'Hell',
      isDone: false,
      id: v1(),
    };

    const copyTask = [...task];
    copyTask.unshift(newTask);

    setTask(copyTask);
  };

  const getTaskForRender = () => {
    switch (filter) {
      case 'active':
        return task.filter(list => !list.isDone);
      case 'completed':
        return task.filter(list => list.isDone);
      default:
        return task;
    }
  };

  //UI
  return (
    <div className="App">
      <TodoList
        title={todoListTitle1}
        task={getTaskForRender()}
        removeTask={removeTask}
        changeFilter={changeFilter}
        filter={filter}
      />
    </div>
  );
}

export default App;
