import { Routes as Rotas, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ListUsers from "./pages/Usuarios";
import UserPerfil from "./pages/UsuarioPerfil";
import { autenticado } from "./services/auth";

function Routes() {
  return (
    <Rotas>
      {/* <Route path="/users" element={<ListUsers />}></Route>
        <Route path="/users/:id" element={<UserPerfil />}></Route> */}


      {autenticado ? (
        <>
        <Route path="/users" element={<ListUsers />}></Route>
        <Route path="/users/:id" element={<UserPerfil />}></Route>
        </>
      ) : ( 
        <>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        </>
      )}
    </Rotas>
  )
}

export default Routes;
