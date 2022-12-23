import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const rowHeaderStyle =
    "text-md font-medium text-indigo-50 px-2 py-1 md:px-6 md:py-4 text-left";
  const rowBodyStyle = "bg-white border-b";
  const textBodyStyle =
    "text-md text-gray-900 font-light px-2 py-1 md:px-6 md:py-4 whitespace-nowrap";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
    // fetch("http://localhost:8081/users")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((users) => {
    //     setUsers(users);
    //   });
  }, [users]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8081/users");
    setUsers(result.data);
  };
  return (
    <div className="home h-full pt-2">
      <div className="home-content mx-auto pt-4 max-w-lg md:max-w-4xl px-3">
        <div className="flex flex-col">
          <div className="overflow-x-auto ">
            <div className="py-2 inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-indigo-600 border-b">
                    <tr>
                      <th scope="col" className={rowHeaderStyle}>
                        #
                      </th>
                      <th scope="col" className={rowHeaderStyle}>
                        Username
                      </th>
                      <th scope="col" className={rowHeaderStyle}>
                        Name
                      </th>
                      <th scope="col" className={rowHeaderStyle}>
                        Email
                      </th>
                      <th scope="col" className="text-md font-medium text-indigo-50 px-2 py-1 md:px-6 md:py-4 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr scope="row" className={rowBodyStyle} key={index}>
                        <td className="px-2 py-1 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className={textBodyStyle}>{user.username}</td>
                        <td className={textBodyStyle}>{user.name}</td>
                        <td className={textBodyStyle}>{user.email}</td>
                        <td >
                          <Link className="mr-2" to="/view">
                            <button className=" max-w-min bg-indigo-600 text-xs px-2 md:text-md text-gray-100 md:px-4 py-1 rounded-lg hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer">
                              View
                            </button>
                          </Link>
                          <Link className="mr-2" to="/edit">
                            <button className="max-w-min text-indigo-600 text-xs px-2 md:text-md bg-gray-100 md:px-4 py-1 rounded-lg hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer">
                              Edit
                            </button>
                          </Link>
                          <Link className="mr-2" to="/delete">
                            <button className="max-w-min bg-red-600 text-xs px-2 md:text-md text-gray-100 md:px-4 py-1 rounded-lg hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer">
                              Delete
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
