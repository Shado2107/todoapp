import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div class="todo-container">
            <ul class="todo-list">
                {
                    filteredTodos.map((todo) =>(
                        <Todo 
                        setTodos={setTodos}
                        todos={todos}
                        text={todo.text} 
                        key={todo.id} 
                        todo={todo}
                        />
                    ))
                }
            </ul>
            
        </div>
    );
};

export default TodoList;