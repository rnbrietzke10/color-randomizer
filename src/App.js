import React, { useState } from 'react';
import './App.css';
import BgColor from './BgColor';

function App() {
	let randColorStored = localStorage.getItem('color');
	const [color, setColor] = useState(randColorStored);
	function randomColor() {
		let randNum = Math.floor(Math.random() * 16777215)
			.toString(16)
			.toUpperCase();

		localStorage.setItem('color', randNum);
		setColor(randNum);
	}
	let myStyle = {
		backgroundColor: '#' + color,
	};

	return (
		<div className="container" style={myStyle}>
			<div className="main">
				<BgColor color={color} />
				<div className="btn" onClick={randomColor}>
					Click me
				</div>
			</div>
		</div>
	);
}

export default App;
