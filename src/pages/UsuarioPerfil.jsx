import { API } from "../services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Loading from "../components/Loading/loading";

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
      API.get(`users/${id}/links`).then((res)=> console.log(res.data))
    } catch (error) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  }

  return loading ? <>{Loading()}</> : <Card user={user}></Card>;
}
