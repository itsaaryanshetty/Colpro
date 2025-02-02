import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';


const Memberdashboard = () => {
  /*const [tasks, setTasks] = useState([
  ]);

  const handleStatusChange = (taskId, newStatus) => {
  
    
  };*/

  return (
    <div className="memberdashboard bg-sky-200">
      <div className="flex">
      <Sidebar role="member"/>

        <div className="main-content w-full p-6">
          <header className="dashboard-header mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Member Dashboard</h1>
            <p className="text-gray-600">View tasks and their status</p>
          </header>

          <div className="overview-grid grid grid-cols-3 gap-6 mb-6">
            {/* Total Projects */}
            <div className="overview-card bg-cyan-950 p-4 rounded-lg shadow-md">
              <h2 className="text-lg text-cyan-50 font-bold">Total Tasks</h2>
              <p className="text-2xl font-bold text-emerald-600">...</p>
            </div>

            <div className="overview-card bg-cyan-950 p-4 rounded-lg shadow-md">
              <h2 className="text-lg text-cyan-50 font-bold">Your Completed Tasks</h2>
              <p className="text-2xl font-bold text-yellow-600">...</p>
            </div>

            <div className="overview-card bg-cyan-950 p-4 rounded-lg shadow-md">
              <h2 className="text-lg text-cyan-50 font-bold">Your In progress Tasks</h2>
              <p className="text-2xl font-bold text-red-600">...</p>
            </div>
          </div>

          <div className="quick-actions grid grid-cols-2 gap-6">
            <div className="action-card bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">View my tasks</h3>
              <Link
                to="/member-tasks"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberdashboard;
