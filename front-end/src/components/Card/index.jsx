import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate()
  return (
    <div class="max-w-md mx-auto bg-gray-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl cursor-pointer" onClick={()=>navigate(`/dashboard/${props.route}`)}>
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://media.gettyimages.com/id/1340516763/pt/foto/empty-classroom.jpg?s=612x612&w=gi&k=20&c=mavZExzZShGjndCicBxitKHPl0-JaEYxSbKyjB0Gw2A="
            alt="Modern building architecture"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {props.name}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {props.info}
          </a>
          <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
}
