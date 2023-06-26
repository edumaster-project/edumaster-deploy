import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <header
      className="px-20 w-full h-20 flex items-center justify-between text-white absolute top-0 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <h2 className="text-white text-3xl font-bold">EduMaster</h2>
    </header>
  );
}
