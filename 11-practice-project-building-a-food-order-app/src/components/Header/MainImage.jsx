import React from "react";

const MainImage = (props) => {
	return (
		<div className={props["classes"]}>
			<img src={require("./meals.jpg")} alt="" />
		</div>
	);
};

export default MainImage;
