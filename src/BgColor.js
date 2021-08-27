import React from 'react';

function BgColor(props) {
	return (
		<div className="bg-color">
			<h1>Background Color: {`# ${props.color}`}</h1>
		</div>
	);
}

export default BgColor;
