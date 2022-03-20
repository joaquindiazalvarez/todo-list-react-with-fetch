import React, { useState } from "react";

//include images into your bundle
import { ToDo } from "./todo.jsx";
import { Done } from "./done.jsx";
import { Footer } from "./footer.jsx";
//create your first component
const Home = () => {
	const [state, setState] = useState(0);
	function update() {
		setState(state + 1);
	}
	return (
		<div>
			<h1 className="text-center mt-5 mb-4">Todo List with React</h1>
			<div className="container">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-4 d-flex justify-content-center">
						<h3>To Do</h3>
						<ToDo stateChange={update} />
					</div>
					<div className="col-4 d-flex justify-content-center">
						<h3>Done</h3>
						<Done state={state} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
