import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <p className="text-xl font-bold">MyBrand</p>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Login & Sign Up Buttons */}
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-800 transition duration-200">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;