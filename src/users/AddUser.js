import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {username, name, email};
    await axios.post("http://localhost:8081/user", user);
    navigate("/");
  };
  return (
    <div className="addUser h-full pt-2">
      <form onSubmit={handleSubmit}>
        <div className="addUser-content p-4 mt-6 rounded-xl bg-indigo-100 mx-auto max-w-xs md:max-w-lg">
          <div className="grid grid-flow-row flex-col mx-auto px-2 md:px-0 ">
            <div className="flex justify-between">
              <h2 className="font-bold text-xl mb-3 w-52 md:w-80 text-right">
                Register user form
              </h2>
              <Link to="/">
                <i className="shink fa-solid fa-xmark"></i>
              </Link>
            </div>

            <div className="username grid grid-cols-2 mb-3">
              <label htmlFor="username">Username: </label>
              <input
                className="pl-2 "
                type="text"
                name="username"
                required
                placeholder="Enter username..."
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="name grid grid-cols-2 mb-3">
              <label htmlFor="name">Full Name: </label>
              <input
                className="pl-2"
                type="text"
                name="name"
                required
                placeholder="Enter your full name..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="email grid grid-cols-2 mb-3">
              <label htmlFor="email">Email: </label>
              <input
                className="pl-2"
                type="text"
                name="email"
                required
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="mt-3 bg-indigo-600 text-gray-100 px-4 py-1 rounded-lg hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
