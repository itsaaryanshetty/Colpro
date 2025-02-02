import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure React Router is set up
import { Menu } from "lucide-react"; // Icon from lucide-react for mobile menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-8 border-b-4 border-cyan-300">
      <div className="flex justify-between items-center">
        <h1 className="text-cyan-300 text-3xl font-bold ">Colpro</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-teal-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-white hover:text-teal-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/teams" className="text-white hover:text-teal-300">
              
            </Link>
          </li>
          <li>
            <Link to="/settings" className="text-white hover:text-teal-300">
              Settings
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="mt-4 space-y-2 md:hidden">
          <li>
            <Link to="/" className="block text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="block text-white">
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/teams" className="block text-white">
              Teams
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block text-white">
              Settings
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
