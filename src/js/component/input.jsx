import React, { useState, useEffect } from "react";
import { Item } from "./item.jsx";
import { ItemLeft } from "./itemLeft.jsx";
export function Input() {
	const [variable, changeVariable] = useState("0");
	const [list, addToList] = useState([]);
	var len = list.length;
	useEffect(() => {
		len = list.length;
	}, [list]);
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
			<div>
				{list.map((value, key) => {
					return <Item name={value} key={key} />;
				})}
			</div>
			<div>{len === 0 ? null : <ItemLeft left={len} />}</div>
		</div>
	);
}
