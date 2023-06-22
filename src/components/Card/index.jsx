import React from "react";
import { Link } from "react-router-dom";

function Card({ user, children }) {
  return (
    <>
      {user ? (
        <div className="flex md:basis-1/4 sm:basis-2/6 basis-3/6 flex-row items-center justify-center bg-slate-300 rounded-2xl">
            <div className="flex flex-col p-10 items-center ">
                <img className="h-20 w-20 rounded-full" src={user.gravatarUrl} alt="" />
                <Link to={`/users/${user.id}`}>
                    <h1 className="text-lg hover:scale-110 active:scale-100 text-center font-semibold leading-7 tracking-tight text-gray-900">{user.name}</h1>
                </Link>
            </div>
        </div>
        
      ) : (
        <>Sem usuário</>
      )}
    </>
  );
}

export default Card;

