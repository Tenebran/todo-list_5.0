import React, { useState } from 'react';
import './App.css';
import { TodoList } from './Todolist';

export type TaskType = {
  title: string;
  isDone: boolean;
  id: number;
};

export type FilterValueType = 'all' | 'active' | 'completed';

//G-R-UD

function App() {
  //BLL
  const todoListTitle1: string = 'What to learn';

  const [filter, setFilter] = useState<FilterValueType>('all');
  const [task, setTask] = useState<Array<TaskType>>([
    { title: 'HTML&CSS', isDone: true, id: 1 },
    { title: 'JS', isDone: false, id: 2 },
    { title: 'React', isDone: true, id: 3 },
  ]);

  const removeTask = (id: number) => {
    const filteredTask: Array<TaskType> = task.filter(list => list.id !== id);
    setTask(filteredTask);
  };

  const changeFilter = (filter: FilterValueType) => setFilter(filter);

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
