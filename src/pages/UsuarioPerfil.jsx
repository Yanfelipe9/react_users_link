import { API } from "../services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../components/CardUser";
import Loading from "../components/Loading/loading";
import { Link } from "react-router-dom";
import CardOtherUser from "../components/CardOtherUser";

export default function UserPerfil() {
  const { id } = useParams();

  console.log(id);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      setLoading(true);
      await API.get(`users/${id}`).then((res) => setUser(res.data));
      API.get(`users/${id}/links`).then((res) => console.log(res.data));
    } catch (error) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  }

  return loading ? (
    <Loading />
  ) : id === localStorage.getItem("id") ? (
    <div>
      <div className="flex justify-center items-center py-3 text-3xl flex-col font-extralight">
        <h1 className="text-4xl ">
          Olá{" "}
          <span className="font-normal">
            <Link to={`/users/${localStorage.getItem("id")}`}>
              {localStorage.getItem("name")}
            </Link>
          </span>
        </h1>
        <h2 className="text-2xl">Bem vindo(a) ao seu perfil</h2>
      </div>
      <section className="sm:mx-32 mx-3">
        <CardUser user={user}></CardUser>
      </section>
    </div>
  ) : (
    <>
      <section className="sm:mx-32 mx-3">
        <CardOtherUser user={user}></CardOtherUser>
      </section>
    </>
  );
}
