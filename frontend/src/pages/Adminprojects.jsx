import React, {useState} from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Adminprojects = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");

  const handleAddProject = () => {
    if (newProjectName.trim()) {
      const newProject = {
        id: Date.now(),  // Unique ID for each project
        name: newProjectName,
      };
      setProjects([...projects, newProject]);
      setNewProjectName("");  // Clear input field
    }
  };

  return (
    <div className="flex bg-sky-200">
    <Sidebar role="admin" />
    <div className="main-content w-full p-6">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">List of projects</h1>

      <div className="mt-6 flex max-w-md gap-x-4 ">
        <input className="flex-1 px-4 py-2 border-2 border-cyan-700 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder=" Enter project name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button className="p-2 bg-slate-200 rounded-full" onClick={handleAddProject}>Add Project</button>
      </div>
      
      <div className="project-list ">
        {projects.length === 0 ? (
          <p className="text-gray-800 p-2 ">No projects available.</p>
        ) : (
          
          projects.map((project) => (
            <ul>
            <div key={project.id} className="project-card flex p-2 gap-x-4">
              <li class="list-disc">{project.name}</li>
              <Link to={`/admin-tasks/${project.id}`}><button className="p-1 bg-slate-200 rounded-full">Add Tasks</button></Link>
            </div>
            </ul>
          ))
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Adminprojects;
