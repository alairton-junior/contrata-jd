import Menu from "./components/Menu";
import Anuncio from "./components/Anuncio/Anuncio";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Menu />
      <div className="md:ps-[90px] lg:ps-[242px] md:pt-[60px] text-subtitle bg-white">
        {/* Coloquem os components aqui dentro */}
        <Dashboard/>
        <Anuncio />
      </div>
    </>
  );
}

export default App;
