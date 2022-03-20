import React, { useState, useEffect } from "react";
import { ItemDone } from "./itemdone.jsx";
import { ItemLeft } from "./itemLeft.jsx";

export function Done(props) {
	const [data, setData] = useState([]);
	const [left, setLeft] = useState(data.length);
	//const [variable, changeVariable] = useState("");
	useEffect(() => {
		setLeft(data.length);
		getFetch();
		console.log(data.length);
	}, []);
	useEffect(() => {
		putFetch();
	}, [data]);
	useEffect(() => {
		getFetch();
		console.log("HOLAHOLAOHLA");
	}, [props.state]);
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
	function deleteItem(name) {
		setLeft(data.length);
		setData(
			data.filter((value) => {
				return value.label != name;
			})
		);
		console.log(data);
	}
	// function addItem() {
	// 	setData([...data, { label: variable, done: false }]);
	// 	console.log(data);
	// }
	return (
		<div>
			<div>
				{data?.map((value, key) => {
					if (value.done == true) {
						return (
							<ItemDone
								name={value.label}
								key={key}
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
