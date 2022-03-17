import React, { useState, useEffect } from "react";
import { Item } from "./item.jsx";

export function Input() {
	const [variable, changeVariable] = useState("0");
	const [list, addToList] = useState([]);
	useEffect(() => {
		console.log(list);
	}, [variable]);
	return (
		<div>
			<input
				type="text"
				placeholder="Insert to do"
				onChange={(e) => {
					changeVariable(e.target.value);
				}}></input>
			<button
				type="button"
				onClick={() => {
					addToList([...list, variable]);
				}}>
				Add
			</button>
			<div className="items">
				{list.map((value) => {
					return <Item name={value} />;
				})}
			</div>
		</div>
	);
}
