import React, { useState } from 'react';
import './App.css';

function randomColor() {
	let randomColor = Math.floor(Math.random() * 16777215)
		.toString(16)
		.toUpperCase();
	return randomColor;
}

function App() {
	const [color, setColor] = useState(randomColor());
	console.log('top', color);
	let myStyle = {
		backgroundColor: '#' + color,
	};
	return (
		<div className="container" style={myStyle}>
			<div className="main">
				<div className="bg-color">
					<h1>Background Color: {`# ${color}`}</h1>
				</div>
				<div
					className="btn"
					onClick={() => {
						setColor(randomColor());
						/* Why is this console log 1 color behind */
						console.log(color);
					}}
				>
					Click me
				</div>
			</div>
		</div>
	);
}

export default App;
