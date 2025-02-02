import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);

  const handleCreateProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="admin-dashboard bg-sky-200">
      <div className="flex">
      <Sidebar role="admin" />

        <div className="main-content w-full p-6">
          <header className="dashboard-header mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">Manage projects, tasks, and teams</p>
          </header>

          {/*<div className="overview-grid grid grid-cols-3 gap-6 mb-6">
            
            <div className="overview-card bg-cyan-950 p-4 rounded-lg shadow-md">
              <h2 className="text-lg text-cyan-50 font-bold">Total Projects</h2>
              <p className="text-2xl font-bold text-emerald-600">...</p>
            </div>

            <div className="overview-card bg-cyan-950 p-4 rounded-lg shadow-md">
              <h2 className="text-lg text-cyan-50 font-bold">Completed Tasks</h2>
              <p className="text-2xl font-bold text-yellow-600">...</p>
            </div>

            <div className="overview-card bg-cyan-950 p-4 rounded-lg shadow-md">
              <h2 className="text-lg text-cyan-50 font-bold">In progress Tasks</h2>
              <p className="text-2xl font-bold text-red-600">...</p>
            </div>
          </div>*/}

          <div className="quick-actions grid grid-cols-2 gap-6">
            <div className="action-card bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Create New Project</h3>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              onClick={handleCreateProject}>
                Create Project
              </button>
               

            </div>

            <div className="action-card bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Manage Tasks</h3>
              <Link
                to="/admin-tasks"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              >
                View Tasks
              </Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
