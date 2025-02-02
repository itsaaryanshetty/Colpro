import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  const adminLinks = [
    { path: "/admin-dashboard", label: "Dashboard" },
    { path: "/admin-projects", label: "Projects" },
    { path: "/admin-tasks", label: "Tasks" },
    { path: "/admin-members", label: "Teams" },
  ];

  const memberLinks = [
    { path: "/member-dashboard", label: "Dashboard" },
    { path: "/member-tasks", label: "TaskDetails" },
    { path: "/profile", label: "Profile" },
  ];

  const links = role === "admin" ? adminLinks : memberLinks;

  return (
    <div className="sidebar w-35 bg-gray-800 text-white min-h-screen p-4">
      
      <nav>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="block py-2 px-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
