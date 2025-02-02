import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admindashboard from "./pages/Admindashboard";
import Adminprojects from "./pages/Adminprojects";
import Admintasks from "./pages/Admintasks";
import Login from "./pages/Login";
import Memberdashboard from "./pages/Memberdashboard";
import Taskdetails from "./pages/Taskdetails";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import Taskcard from "./components/Taskcard";
import About from "./pages/About";
import Header from "./components/Header";



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/admin-dashboard" element={<Admindashboard />} />
        <Route path="/admin-projects" element={<Adminprojects />} />
        <Route path="/admin-tasks" element={<Admintasks />} />
        <Route path="/member-tasks" element={<Taskdetails/>}/>
        <Route path="/member-dashboard" element={<Memberdashboard/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
