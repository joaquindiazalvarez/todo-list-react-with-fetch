import React, { useState, useEffect } from "react";
import { Item } from "./item.jsx";
import { ItemLeft } from "./itemLeft.jsx";
export function Input() {
	const [data, setData] = useState([]);
	const [left, setLeft] = useState(0);
	useEffect(() => {
		setLeft(data.length);
		getFetch();

		// fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquindiaz")
		// 	.then((response) => response.json())
		// 	.then((result) => {
		// 		console.log(result);
		// 		setData(result);
		// 	});
		// 	.catch(error => console.log('error', error));
	}, []);
	function getFetch() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquindiaz")
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setData(result);
			})
			.catch((error) => console.log("error", error));
	}
	function deleteItem(name) {
		setData(
			data.filter((value) => {
				return value.label != name;
			})
		);
		console.log("hola");
		console.log(data);
		setLeft(data.length);
	}
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					getFetch();
				}}>
				Actualizar
			</button>
			<div>
				{data?.map((value, key) => {
					return (
						<Item
							name={value.label}
							key={key}
							deleteFunction={deleteItem}
						/>
					);
				})}
			</div>
			<div>{left === 0 ? null : <ItemLeft left={left} />}</div>
		</div>
	);
}
