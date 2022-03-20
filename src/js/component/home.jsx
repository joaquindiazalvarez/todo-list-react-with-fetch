import React from "react";

//include images into your bundle
import { ToDo } from "./todo.jsx";
import { Footer } from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<h1 className="text-center mt-5 mb-4">Todo List with React</h1>
			<div className="container">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-8 d-flex justify-content-center">
						<ToDo />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
