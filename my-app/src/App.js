import React from 'react';
import { AddToDo } from './components/addToDo';
import { TodoList } from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddToDo/>
      <TodoList/>
    </div>
  );
}

export default App;
