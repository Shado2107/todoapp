/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import './style.css';
import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [Todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [Todos, status]);


  const filterHandler = () => {
    switch(status){
        case 'completed':
          setFilteredTodos(Todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(Todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(Todos);
          break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem("Todos", JSON.stringify(Todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("Todos") ===null){
      localStorage.setItem("Todos", JSON.stringify([]));
    }else{
     let todoLocal = JSON.parse(localStorage.getItem("Todos"));
    //  localStorage.getItem("Todos", JSON.stringify(Todos));
     setTodos(todoLocal);
    }

  };


  return (
    <div className="App">
      <header>
        <h1>Pavel todo list</h1>
      </header>
     <Form 
     inputText={inputText} 
     todos={Todos} 
     setTodos={setTodos} 
     setInputText={setInputText} 
     setStatus={setStatus}
     
     />
     <TodoList todos={Todos}  setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
