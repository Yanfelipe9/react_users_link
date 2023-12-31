import React, { useState } from "react";
import { Link } from "react-router-dom";


function CardUser({ user }) {
  const [newLink, setNewLink] = useState("");
  const [links, setLinks] = useState([]);


  const handleAddLink = () => {
    if (newLink.trim() !== "") {
      const newLinks = [...links, newLink];
      setLinks(newLinks);
      setNewLink("");     
    }
  };
  

  const handleDeleteLink = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const handleEditLink = (index, newUrl) => {
    const newLinks = [...links];
    newLinks[index] = newUrl;
    setLinks(newLinks);
  };

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
            <table className="mt-2 w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4 bg-gray-200 font-semibold text-sm">URL</th>
                  <th className="text-left py-2 px-4 bg-gray-200 font-semibold text-sm">Ações</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{link}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="mr-2 text-blue-500 hover:text-blue-700"
                        onClick={() => handleEditLink(index, prompt("Enter new URL"))}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteLink(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-4">
              <input
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
                type="text"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                placeholder="Digite seu link"
              />
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                onClick={handleAddLink}
              >
                Adicione seu link
              </button>
            </div>
          </div>
        </>
      ) : (
        <>Sem usuário</>
      )}
    </>
  );
  
}

export default CardUser;













// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { API } from "../../services/Api";

// function CardUser({ user }) {
//   const [newLink, setNewLink] = useState("");
//   const [links, setLinks] = useState([]);

//   useEffect(() => {
//     const fetchLinks = async () => {
//       try {
//         const response = await API.get(`/users/${user.id}/links`);
//         setLinks(response.data);
//       } catch (error) {
//         console.error("Erro ao buscar os links:", error);
//       }
//     };

//     if (user && user.id) {
//       fetchLinks();
//     }
//   }, [user]);

//   const handleAddLink = async () => {
//     if (newLink.trim() !== "") {
//       try {
//         const response = await API.post(`/users/${user.id}/links`, {
//           url: newLink.trim()
          
//         });
        
//         const newLinks = [...links, response.data];
//         setLinks(newLinks);
//         setNewLink("");
//       } catch (error) {
//         console.error("Erro ao adicionar o link:", error);
//       }
//     }
//   };

//   const handleDeleteLink = async (linkId) => {
//     try {
//       await API.delete(`/users/${user.id}/links/${linkId}`);
//       const newLinks = links.filter((link) => link.id !== linkId);
//       setLinks(newLinks);
//     } catch (error) {
//       console.error("Erro ao excluir o link:", error);
//     }
//   };

//   const handleEditLink = async (linkId, newUrl) => {
//     try {
//       await API.put(`/users/${user.id}/links/${linkId}`, { url: newUrl });
//       const newLinks = links.map((link) => {
//         if (link.id === linkId) {
//           return { ...link, url: newUrl };
//         }
//         return link;
//       });
//       setLinks(newLinks);
//     } catch (error) {
//       console.error("Erro ao editar o link:", error);
//     }
//   };

//   return (
//     <>
//       {user ? (
//         <>
//           <li className="flex justify-start py-5">
//             <div className="flex gap-x-4 pr-3">
//               <img
//                 className="h-12 w-12 flex-none rounded-full bg-gray-50"
//                 src={user.gravatarUrl}
//                 alt=""
//               />
//             </div>
//             <div>
//               <Link to={`/users/${user.id}`}>
//                 <p className="text-sm font-semibold leading-6 text-gray-900 hover:scale-105 active:scale-100">
//                   {user.name}
//                 </p>
//               </Link>
//               <p className="mt-1 truncate text-xs leading-5 text-gray-500">
//                 {user.email}
//               </p>
//             </div>
//           </li>
//           <hr className="border-slate-300" />
//           <div className="flex flex-col items-center">
//             <h2 className="text-lg font-semibold">Links:</h2>
//             <table className="mt-2 w-full border-collapse">
//               <thead>
//                 <tr>
//                   <th className="text-left py-2 px-4 bg-gray-200 font-semibold text-sm">
//                     URL
//                   </th>
//                   <th className="text-left py-2 px-4 bg-gray-200 font-semibold text-sm">
//                     Ações
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {links.map((link) => (
//                   <tr key={link.id}>
//                     <td className="py-2 px-4 border-b">{link.url}</td>
//                     <td className="py-2 px-4 border-b">
//                       <button
//                         className="mr-2 text-blue-500 hover:text-blue-700"
//                         onClick={() =>
//                           handleEditLink(link.id, prompt("Enter new URL"))
//                         }
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="text-red-500 hover:text-red-700"
//                         onClick={() => handleDeleteLink(link.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="flex mt-4">
//               <input
//                 className="mr-2 px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
//                 type="text"
//                 value={newLink}
//                 onChange={(e) => setNewLink(e.target.value)}
//                 placeholder="Digite seu link"
//               />
//               <button
//                 className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
//                 onClick={handleAddLink}
//               >
//                 Adicione seu link
//               </button>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>Sem usuário</>
//       )}
//     </>
//   );
// }

// export default CardUser;
