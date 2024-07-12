import Items from "./Items";
import {
  IconDashboard,
  IconRecruitment,
  IconCalendar,
  IconEmployee,
  IconDepartment,
  IconSupport,
  IconSettings
} from "../../assets/icons";

function ContainerItems({ toggleMenu }) {
  return (
    <div
      className={`z-20 absolute top-0 overflow-hidden flex flex-col gap-5 min-h-64 h-dvh w-full pt-[60px] bg-neutral-100 duration-100 text-subtitle font-default    
        ${toggleMenu ? "left-0" : "-left-full"}`}
    >
      <span className="block w-full text-center text-[22px] font-semibold text-coral">
        Contrato ;D
      </span>
      <nav className="flex-grow space-y-5 overflow-y-auto">
        <p className="font-medium font-Roboto text-xs px-5">MENU PRINCIPAL</p>
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
        <p className="font-medium font-Roboto text-xs px-5">OUTROS</p>
        <menu className="flex flex-col w-full gap-4 px-5">
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
