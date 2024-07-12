import { useState } from "react";
import Header from "./Header";
import ContainerItems from "./ContainerItems";

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <ContainerItems toggleMenu={toggleMenu} />
    </>
  );
}

export default Menu;
