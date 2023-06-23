import { API } from "../services/Api";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading/loading";
import { Link } from "react-router-dom";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      setLoading(true);
      await API.get("users").then((res) => {
        console.log(res.data);
        setUsers(res.data);
      });
    } catch (error) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  }

  return loading ? (
    <>{Loading()}</>
  ) : (
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
        <h2 className="text-2xl">Bem vindo(a) ao <span className="tracking-wider">React Users Link</span></h2>
        <p className="text-base font-thin">Aqui você encontrará todos os contatos de seus colegas</p>
      </div>
      <section>
        <ul className="sm:mx-32 mx-3">
            {users.map((user) => (
              <Card key={user.id} user={user}></Card>
            ))}
        </ul>
      </section>
    </div>
  );
}

