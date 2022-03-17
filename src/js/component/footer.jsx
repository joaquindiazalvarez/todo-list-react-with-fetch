import React from "react";
export function Footer() {
	return (
		<footer className="fixed-bottom mt-auto footer bg-dark text-light py-2">
			<div className="container">
				<span className="text-light">
					Made by{" "}
					<a
						className="text-light"
						href="http://www.4geeksacademy.com">
						4Geeks Academy
					</a>
					, with love!
				</span>
			</div>
		</footer>
	);
}
