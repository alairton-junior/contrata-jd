import Items from "./Items";
import {
  IconDashboard,
  IconRecruitment,
  IconCalendar,
  IconEmployee,
  IconDepartment,
  IconSupport,
  IconSettings,
} from "../../assets/icons";

function ContainerItems({ toggleMenu }) {
  return (
    <div
      className={`z-20 absolute top-0 overflow-hidden flex flex-col gap-5 min-h-64 h-dvh w-full pt-[60px] bg-white 
        duration-100 text-subtitle font-default md:w-[90px] md:fixed lg:w-[242px] lg:pt-4 border-e-[1px] border-neutral-300
        ${toggleMenu ? "left-0" : "-left-full md:left-0"}`}
    >
      <span className="block w-full text-center text-[22px] font-semibold text-coral ">
        <span className="md:hidden lg:block">Contrato ;D</span>
        <span className="hidden md:block lg:hidden">;D</span>
      </span>
      <nav className="flex-grow space-y-5 overflow-y-auto hidden-scroll">
        <p className="font-medium font-Roboto text-xs px-5 md:text-[10px] md:text-center lg:text-start">
          <span className="md:hidden">MENU PRINCIPAL</span>
          <span className="hidden md:block">MENU</span>
        </p>
        <menu className="flex flex-col w-full gap-4 px-5">
          <Items text={"Dashboard"}>
            <IconDashboard className="group-hover:fill-coral duration-100" />
          </Items>
          <Items text={"Recrutamento"}>
            <IconRecruitment className="group-hover:fill-coral duration-100" />
          </Items>
          <Items text={"Agendamento"}>
            <IconCalendar className="group-hover:fill-coral duration-100" />
          </Items>
          <Items text={"Colaboradores"}>
            <IconEmployee className="group-hover:fill-coral duration-100" />
          </Items>
          <Items text={"Departamento"}>
            <IconDepartment className="group-hover:fill-coral duration-100" />
          </Items>
        </menu>
        <p className="font-medium font-Roboto text-xs px-5 md:text-[10px] md:text-center  lg:text-start">
          OUTROS
        </p>
        <menu className="flex flex-col w-full gap-4 px-5 pb-5">
          <Items text={"Suporte"}>
            <IconSupport className="group-hover:fill-coral duration-100" />
          </Items>
          <Items text={"Configurações"}>
            <IconSettings className="group-hover:fill-coral duration-100" />
          </Items>
        </menu>
      </nav>
    </div>
  );
}

export default ContainerItems;
