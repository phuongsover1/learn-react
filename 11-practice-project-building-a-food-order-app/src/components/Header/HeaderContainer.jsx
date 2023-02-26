import React from "react";
import MainImage from "./MainImage";
import Header from "./Header";
import styles from "./Header.module.css";

const HeaderContainer = (props) => {
	return (
		<React.Fragment>
			<Header classes={styles.header} />

			<MainImage classes={styles["main-image"]} />
		</React.Fragment>
	);
};

export default HeaderContainer;
