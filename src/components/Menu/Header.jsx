import {
  IconSearch,
  IconNotification,
  IconChat,
  IconArrow,
} from "../../assets/icons";

function Header({ toggleMenu, setToggleMenu }) {
  return (
    <header className="bg-white flex justify-between items-center w-full h-[60px] px-5">
      <div className="flex items-center gap-5">
        <button
          onClick={() => setToggleMenu((el) => !el)}
          className="z-30 relative flex flex-col justify-center gap-1 h-[18px] w-7"
        >
          <span
            className={`absolute top-[0px] h-1 w-full bg-[#B2B2B2] duration-200 ${
              toggleMenu ? "rotate-[225deg] !top-[7px]" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-[#B2B2B2] duration-100 ${
              toggleMenu ? "opacity-0 invisible" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute bottom-[0px] h-1 w-full bg-[#B2B2B2] duration-200 ${
              toggleMenu ? "rotate-[135deg] !bottom-[7px]" : ""
            }`}
          ></span>
        </button>
        <button>
          <IconSearch className="size-6" />
        </button>
      </div>
      <div className="flex items-center gap-5">
        <button>
          <IconNotification className="size-6" />
        </button>
        <button>
          <IconChat className="size-6" />
        </button>
        <div className="flex gap-1.5">
          <picture className="size-9 rounded-full bg-sky-300">
            {/* <img src="/" alt="Perfil" /> */}
          </picture>
          <button>
            <IconArrow className="size-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
