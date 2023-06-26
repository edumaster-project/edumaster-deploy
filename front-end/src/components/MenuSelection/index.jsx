import { useNavigate } from "react-router-dom";
import picture from "../../assets/profile.png";
import { BadgeHelp, CircleDotDashed, Home, LogOut, PanelLeft, User2 } from "lucide-react";

export default function MenuSelection(props) {
  const navigate = useNavigate();
  return (
    <aside className="w-96 h-full bg-gray-600 py-5 flex flex-col gap-1 text-white font-semibold text-lg">
      <section className=" w-full h-32 flex items-center gap-5">
        <img
          className="object-cover rounded-full w-20 h-20 ml-5"
          src={picture}
          alt="profile picture"
        />
        {props.name}
      </section>
      <div className="h-1 bg-gray-400/40"></div>
      <h3 className="my-6 ml-6">Menu</h3>
      <div
        className="flex items-center hover:bg-slate-500 cursor-pointer pl-4 text-white h-14 gap-3"
        onClick={() => navigate("/dashboard/main")}
      >
        <Home />
        Dashboard
      </div>
      {/* <div
        className="flex items-center hover:bg-slate-500 cursor-pointer pl-4 text-white h-14 gap-3"
        onClick={() => navigate("/dashboard/profile")}
      >
        <User2 />
        Minha Conta
      </div> */}
      <div
        className="flex items-center hover:bg-slate-500 cursor-pointer pl-4 text-white h-14 gap-3"
        onClick={() => navigate("/dashboard/classroom")}
      >
        <CircleDotDashed />
        Salas de Aula
      </div>
      <div
        className="flex items-center hover:bg-slate-500 cursor-pointer pl-4 text-white h-14 gap-3"
        onClick={() => navigate("/dashboard/transfers")}
      >
        <PanelLeft />
        Transferências
      </div>
      <div
        className="flex items-center hover:bg-slate-500 cursor-pointer pl-4 text-white h-14 gap-3"
        onClick={() => navigate("/dashboard/help")}
      >
        <BadgeHelp />
        Ajuda
      </div>
      <div
        className="flex items-center hover:bg-slate-500 cursor-pointer pl-4 text-white h-14 gap-3"
        onClick={() => {
          localStorage.removeItem("userData");
          navigate("/sign-in");
        }}
      >
        <LogOut />
        Sair
      </div>
    </aside>
  );
}
