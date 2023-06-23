import React from "react";
import { Link } from "react-router-dom";

export default function CardOtherUser({user}) {
  return (
    <>
      {user ? (
        <>
          <li className="flex justify-start py-5">
            <div className="flex gap-x-4 pr-3">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={user.gravatarUrl}
                alt=""
              />
            </div>
            <div>
              <Link to={`/users/${user.id}`}>
                <p className="text-sm font-semibold leading-6 text-gray-900 hover:scale-105 active:scale-100">
                  {user.name}
                </p>
              </Link>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {user.email}
              </p>
            </div>
          </li>
          <hr className="border-slate-300" />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Links:</h2>
          </div>
        </>
      ) : (
        <>Sem usuário</>
      )}
    </>
  );
}
