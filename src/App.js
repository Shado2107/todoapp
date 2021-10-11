import './style.css';
import React, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [Todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Pavel todo list {inputText} </h1>
      </header>
     <Form inputText={inputText} todos={Todos} setTodos={setTodos} setInputText={setInputText} />
     <TodoList/>
    </div>
  );
}

export default App;
