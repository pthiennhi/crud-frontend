import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex flex-row justify-between m-4 mt-0 mb-1 pt-1 md:m-6 md:mt-2 md:mb-2 ">
      <Link to="/" className="flex items-center">
        <h1 className="flex items-center font-bold text-md md:text-xl text-indigo-600 hover:text-gray-600 hover:cursor-pointer">
          CRUD Application
        </h1>
      </Link>
      <div className="flex flex-row text-sm md:text-lg">
        <Link
          className="flex mr-2 md:mr-4 items-center border-b-2 border-transparent hover:border-b-2 hover:border-b-gray-900"
          to="/"
        >
          Home
        </Link>
        <Link className="flex" to="/add">
          <button className=" bg-indigo-600 text-xs px-2 md:text-xl text-gray-100 md:px-4 py-1 rounded-lg hover:bg-gray-800 hover:text-gray-100 hover:cursor-pointer">
            Add User
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
