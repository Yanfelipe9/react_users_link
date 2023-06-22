import { API } from "../services/Api";
import { useEffect, useState } from "react";
import Card from "../components/Card"
import Loading from "../components/Loading/loading"

export default function ListUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getUsers();

    },[]);

    async function getUsers() {

        try{
            setLoading(true)
            await API.get('users')
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
        } catch(error) {
            alert('Error')
        } finally {
            setLoading(false)
        }


    }


    return (
        loading ? <>{Loading()}</> :
        <section className="flex flex-wrap justify-center gap-3 py-3">
            {users.map((user) => (
                <Card key={user.id} user={user}></Card>
            ))}
        </section>
        
    );
}

