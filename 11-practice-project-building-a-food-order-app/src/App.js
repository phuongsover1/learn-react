import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandle = () => {
    setCartIsShow(true);
  };

  const hideCartHandle = () => {
    setCartIsShow(false);
  };
  return (
    <React.Fragment>
      {cartIsShow && <Cart onClose={hideCartHandle} />}
      <Header onShowCart={showCartHandle} isClick={cartIsShow} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
