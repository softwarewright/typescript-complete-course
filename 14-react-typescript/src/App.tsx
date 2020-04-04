import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import Todo from './todo.model';

function App() {
  const [todosState, setTodosState] = useState<Todo[]>([])

  const addTodoHandler = (text:string) => {
    setTodosState(prevTodos => [
      ...prevTodos,
      {text, id: `t${prevTodos.length}`}
    ])
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList items={todosState}/>
    </div>
  );
}

export default App;
