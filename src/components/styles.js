import styled from "styled-components";

export const Title = styled.h1`
	text-align: center;
	font-family: Josefin Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 36px;
	color: #2ecc71;
`;

export const TodoList = styled.div`
	margin: 0 auto;
	width: 243px;
	font-family: Open Sans;
	border: 1px solid #9F9F9F;
	box-sizing: border-box;
	border-radius: 8px;
	padding: 5px;
`;

export const InputContainer = styled.form`
	height: 30px;
	background: #C4C4C4;
	border: 1px solid #9F9F9F;
	box-sizing: border-box;
	border-radius: 8px;
	display: grid;
	grid-template-columns: 2fr 1fr;
`;

export const Input = styled.input`
	color: white;
	background: none;
	border: none;
	padding-left: 10px;
	&&:focus{
		outline: none;
	}
`;

export const Button = styled.button`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	&&:focus{
		outline: none;
	}
	&&:hover{
		font-weight: bold;
		color: #2ecc71;
	}
`;

export const Todos = styled.ul`
	padding: 0;
	margin: 0;
	margin-top: 10px;
	list-style: none;
`;

export const TodoItem = styled.li`
	color: #9F9F9F;
	border-bottom: 1px solid #9F9F9F;
	display: grid;
	grid-template-columns: 10fr 1fr;
	button{
		border: none;
		background: none;
		color: #9F9F9F;
		font-weight: bold;
		cursor: pointer;
	}
	button:focus{
		outline: none;
	}
	button:hover{
		color: #e74c3c;
	}
`;

export const TodoData = styled.span`
	color: ${({done}) => done ? "inherit": "#2ecc71"};
	cursor: pointer;
	text-decoration: ${({done}) => done ? "line-through": "none"};
	
`;

export const Nothing = styled.h1`
	text-align: center;
	color: #e74c3c;
	font-size: 30pt;
	font-family: Josefin Sans;
`;