import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { signIn } from "../../services/signInApi";
import { toast } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function doLogin(e) {
    e.preventDefault();
    try {
      const userData = await signIn(form);
      setUserData(userData);
      toast("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err.response.data.message);
      toast(err.response.data.message);
    }
  }

  return (
    <div className="login">
      <NavigationBar />
      <main className="w-1/4  h-fit rounded-xl bg-gray-600 p-10 flex-col gap-3 items-center justify-center">
        <div className="text-white">
          <h1 className="text-4xl mt-10 font-bold">Login</h1>
          <h3 className="mt-3">Let’s get started!</h3>
        </div>
        <form className="mt-8 flex flex-col gap-8" onSubmit={doLogin}>
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleForm}
            required
          />
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
            required
          />
          <button
            type="submit"
            className="bg-gray-400 h-10 rounded-3xl text-white font-bold hover:bg-gray-500"
          >
            Sign Up
          </button>
        </form>
        <h2
          className="text-white text-lg my-12 text-center cursor-pointer"
          onClick={() => navigate("/sign-up")}
        >
          Create Account
        </h2>
      </main>
    </div>
  );
}
