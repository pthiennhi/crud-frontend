import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/user/${id}`);
    setUser(result.data);
    setUsername(result.data.username);
    setEmail(result.data.email);
    setName(result.data.name);
  };
  return (
    <div className="viewUser h-full pt-2">
      <div className="home-content mx-auto pt-4 max-w-lg md:max-w-4xl px-3">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-indigo-100 ">
            <thead className="text-xs text-indigo-100 uppercase bg-indigo-600">
              <tr>
                <th scope="col" className="py-3 px-6 text-indigo-100">
                  Id
                </th>
                <th scope="col" className="py-3 px-6 text-indigo-100">
                  Username
                </th>
                <th scope="col" className="py-3 px-6 text-indigo-100">
                  Full name
                </th>
                <th scope="col" className="py-3 px-6 text-indigo-100">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th className="py-4 px-6">{id}</th>
                <td className="py-4 px-6">{username}</td>
                <td className="py-4 px-6">{name}</td>
                <td className="py-4 px-6">{email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
