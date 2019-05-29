import React, {useState} from "react";
import {InputContainer, Input, Button} from "./styles";

export default function TodoInput ({addTodo}){
	const [value, setValue] = useState("");
	return(
		<InputContainer onSubmit={(e) => {
			e.preventDefault();
			if(value){
				addTodo(value);
				setValue("");
			}
		}}>
			<Input value={value} onChange={(e) => setValue(e.target.value)}/>
			<Button>></Button>
		</InputContainer>
	);
}