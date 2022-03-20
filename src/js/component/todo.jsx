import React, { useState, useEffect } from "react";
import { ItemToDo } from "./itemtodo.jsx";
import { ItemLeft } from "./itemLeft.jsx";

export function ToDo(props) {
	const [data, setData] = useState([]);
	const [left, setLeft] = useState(data.length);
	const [variable, changeVariable] = useState("");
	useEffect(() => {
		setLeft(data.length);
		getFetch();
		console.log(data.length);
	}, []);
	useEffect(() => {
		props.stateChange();
		putFetch();
	}, [data]);
	function getFetch() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquindiaz")
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setData(result);
			})
			.catch((error) => console.log("error", error));
	}
	function putFetch() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: JSON.stringify(data),
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/joaquindiaz",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	}
	function deleteItem(key, name) {
		setLeft(data.length);
		console.log(data[key]);
		setData(data.splice(key, 1));
		setData([...data, { label: name, done: true }]);

		console.log(data);
	}
	function addItem() {
		setData([...data, { label: variable, done: false }]);
		console.log(data);
	}
	return (
		<div>
			<input
				type="text"
				placeholder="Insert to-do and press Enter"
				onChange={(e) => changeVariable(e.target.value)}
				onKeyPress={(e) => {
					e.key == "Enter" ? addItem() : null;
				}}></input>
			<div>
				{data?.map((value, index) => {
					if (value.done == false) {
						return (
							<ItemToDo
								name={value.label}
								key={index}
								deleteFunction={deleteItem}
							/>
						);
					}
				})}
			</div>
			<div>{left === 0 ? null : <ItemLeft left={left} />}</div>
		</div>
	);
}
