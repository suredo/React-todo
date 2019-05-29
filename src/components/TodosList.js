import React from "react";
import {Todos} from "./styles";
import TodoItem from "./TodosItem";

export default function TodosList({todos, removeTodo, setTodoState}){
	return(
		<Todos>
			{todos.map(item => <TodoItem removeTodo={removeTodo} data={item} setTodoState={setTodoState} key={item.id}/>)}
		</Todos>
	);
}