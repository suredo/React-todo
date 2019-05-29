import React from "react";
import {TodoItem, TodoData} from "./styles";

export default function TodosItem({data, removeTodo, setTodoState}){
	return(
		<TodoItem>
			<TodoData done={data.done} onClick={() => setTodoState(data.id)}>{data.todo}</TodoData>
			<button onClick={() => removeTodo(data.id)}>X</button>
		</TodoItem>
	)
}