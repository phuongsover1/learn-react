import React from "react";

import './Card.css';

function Card(props) {
	const cssClass = 'card ' + props.className;
	return (
		<div className={cssClass}>
			{props.children}
		</div>
	);
}

export default Card;
