import { useEffect, useState } from "react";
import CardModel from "./cardModel";
import { toast } from "react-toastify";
import { getInformations, save } from "../../../services/classesApi";
import useToken from "../../../hooks/useToken";

export default function Classes() {
  const [click, setClick] = useState(false);
  const token = useToken();

  const [form, setForm] = useState({
    name: "",
    quantity: "",
  });
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [data, setData] = useState();

  async function fillData() {
    try {
      const backData = await getInformations(token);
      setData(backData);
    } catch (err) {
      toast(err.response.data.message);
    }
  }

  useEffect(() => {
    fillData();
  }, [click]);

  console.log(click)
  async function createClassroom(e) {
    e.preventDefault();

    try {
      const classRoom = await save(form, token);
      console.log(classRoom);
      setForm({ name: "", quantity: "" });
      setClick(false);
      toast('Sala de aula cadastrada!')
    } catch (err) {
      console.log(err.response.data.message)
      toast(err.response.data.message);
    }
  }

  function CreateForm() {
    return (
      <div className="absolute w-96 h-fit top-72 left-1/2 rounded-xl bg-gray-600/80 p-2">
        <h1 className="text-center font-bold text-xl text-white my-5">
          Formulário de Turma
        </h1>
        <form className="mt-8 flex flex-col gap-8" onSubmit={createClassroom}>
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Sigla da Turma"
            type="text"
            name="name"
            value={form.name}
            onChange={handleForm}
            required
          />
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Quantidade de Alunos"
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleForm}
            required
          />
          <button
            type="submit"
            className="bg-gray-400 h-10 rounded-3xl text-white font-bold hover:bg-gray-500 mb-5"
          >
            Criar turma
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <button
        type="button"
        class="absolute right-14 top-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => setClick(!click)}
      >
        Criar Turma
      </button>
      {click && <CreateForm />}
      <div className="w-full h-full flex justify-center flex-wrap gap-5 pt-10 px-5 overflow-scroll">
        {data &&
          data.map((el) => (
            <CardModel key={el.id} sigla={el.name} quantity={el.quantity} id={el.id}/>
          ))}
      </div>
    </div>
  );
}
