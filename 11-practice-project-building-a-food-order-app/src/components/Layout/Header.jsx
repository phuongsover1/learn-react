import React, { useState } from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const updateIsCartModalOpen = () => {
    if (isCartModalOpen) setIsCartModalOpen(false);
    else setIsCartModalOpen(true);
  };
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          isClick={isCartModalOpen}
          onClick={updateIsCartModalOpen}
        />
        {isCartModalOpen && <Cart onCloseModal={updateIsCartModalOpen} />}
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
