import { useState } from "react";
import Header from "./Header";
import ContainerItems from "./ContainerItems";

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <ContainerItems toggleMenu={toggleMenu} />
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  );
}

export default Menu;
