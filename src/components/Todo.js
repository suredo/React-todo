import React, {useState} from 'react';
import { Title, TodoList, Nothing} from './styles';
import Input from "./Todo-input";
import Todos from "./TodosList";

function Todo() {
  const [todo, setTodo] = useState([
    {todo: "Make a todo list", done: true, id: 1},
    {todo: "Add and remove todo items", done: false, id: 2}
  ]);
  const addTodo = (text) => {
    const id = todo.length > 0 ? todo[todo.length-1].id + 1 : 0;
    const data = {todo: text, done: false, id: id};
    setTodo([...todo, data]);
  }
  const removeTodo = (id) => {
    setTodo(todo.filter(item => item.id !== id));
  }

  const setTodoState = (id) => {
    const todos = todo.map(item => {
      if(item.id === id){
        return {...item, done: !item.done};
      }
      return item;
    });
    setTodo(todos);
  }

  return (
    <div>
      <Title>TO<br/>-DO</Title>
      <TodoList>
        <Input addTodo={addTodo}/>
        {
          todo.length > 0 ? 
          <Todos todos={todo} setTodoState={setTodoState} removeTodo={removeTodo}/> :
          <Nothing>You should add something!</Nothing>
        }
      </TodoList>
    </div>
  );
}

export default Todo;
