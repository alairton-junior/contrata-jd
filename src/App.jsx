import Menu from "./components/Menu";
import Anuncio from "./components/Anuncio/Anuncio";

function App() {
  return (
    <>
      <Menu />
      <div className="md:ps-[90px] lg:ps-[242px] md:pt-[60px] text-subtitle bg-white">
        {/* Coloquem os components aqui dentro */}
        <Anuncio />
      </div>
    </>
  );
}

export default App;
