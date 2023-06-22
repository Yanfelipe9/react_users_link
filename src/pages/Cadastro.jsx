import { useState } from "react";
import { API } from "../services/Api";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(null);
  const [password, setPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  async function autenticar(evento) {
    try {
      evento.preventDefault();

      if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
      }

      const dados = { name, email, password };

      const response = await API.post("/users", dados);

      navigate("/")

    } catch (error) {
      console.log(error.response.status);
    }
  }

  return (
    <div className="z-10 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col py-10">
      <div className="bg-indigo-600 fixed flex px-20 py-10 flex-col rounded-xl">
        <div>
          <h2 className="text-center text-3xl font-bold leading-9 text-gray-900">
            Cadastre-se aqui
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6 text-sm font-medium"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="user"
                className="block text-left  leading-6 text-gray-900"
              >
                Nome do usuário:
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Insira o nome do usuário..."
                  onChange={(evento) => setName(evento.target.value)}
                  className="block w-full rounded-md pl-1 py-1.5 text-gray-900 ring-inset  placeholder:text-gray-400  sm:text-sm "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left  leading-6 text-gray-900"
              >
                Email:
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Digite seu email válido..."
                  onChange={(evento) => setEmail(evento.target.value)}
                  className="block w-full rounded-md pl-1 py-1.5 text-gray-900 ring-inset  placeholder:text-gray-400  sm:text-sm "
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block leading-6 text-gray-900"
                >
                  Senha:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Insira sua senha..."
                  onChange={(evento) => setPasword(evento.target.value)}
                  className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block leading-6 text-gray-900"
                >
                  Confirmar Senha:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Confirme sua senha..."
                  onChange={(evento) => setConfirmPassword(evento.target.value)}
                  className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={autenticar}
                type="submit"
                className="flex w-full justify-center rounded-md bg-black text-white p-3 text-xl font-normal hover:bg-indigo-900 "
              >
                Cadastre-se
              </button>
            </div>
          </form>
          <Link
            to="/"
            className="absolute top-3 right-6 text-2xl font-medium cursor-pointer"
          >
            x
          </Link>
        </div>
      </div>
    </div>
  );
}
