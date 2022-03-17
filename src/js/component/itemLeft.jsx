import React from "react";

export function ItemLeft(props) {
	return (
		<div className="item" id="left">
			<span>
				<div className="text">{props.left} items left</div>
			</span>
		</div>
	);
}
