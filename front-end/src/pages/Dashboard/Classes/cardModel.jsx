import { useNavigate } from "react-router-dom";

export default function CardModel(props) {
  const navigate = useNavigate()
  return (
    <div
      className="w-52 h-60 bg-gray-500 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => navigate(`/dashboard/profile/${props.id}`)}
    >
      <section className="h-1/2 w-full bg-gray-600 flex items-center justify-center text-white font-extrabold text-lg">
        Turma: {props.sigla}
      </section>
      <section className="h-1/2 w-full flex items-center justify-center text-white font-extrabold text-lg">
        {props.quantity}
      </section>
    </div>
  );
}
