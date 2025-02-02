import React from "react";
import Colprous from '../assets/Colprous.jpeg';

import { FaLinkedinIn } from "react-icons/fa";


const About =()=> {
    return (<div>
        
        <div className="flex h-screen bg-sky-100">
        <div className="flex-1 p-15">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-2xl py-5 space-y-20">
            Welcome to our platform. Here, you can manage your team projects efficiently and effectively.
            All three of us are single. We can make LinkedIn our official Tinder 😁 
            The name comes from Improving team <span className=" text-cyan-800 font-bold">Col</span>laboration and Increasing <span className="text-cyan-800 font-bold">pro</span>ductivity
          </p>
          <div className="linkedin py-6 flex flex-col items-center space-y-10 bg-gray-100 rounded-2xl shadow-lg p-8 mt-40">
  <h2 className="text-2xl font-bold text-gray-800 ">Meet the Team</h2>
  <div className="team-members grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
    {/* Aaryan */}
    <a href='https://www.linkedin.com/in/aaryan-shetty-5a181b284/?originalSubdomain=in'>
    <div className="team-card flex items-center gap-4 bg-cyan-950 p-4 rounded-lg shadow-md hover:shadow-lg">
      <div className="icon bg-blue-100 text-blue-600 p-3 rounded-full">
        <FaLinkedinIn size={20} />
      </div>
      <div>
        <h3 className="font-bold text-md text-sky-200">Aaryan Shetty</h3>
        <p className="text-sky-200">Frontend Developer</p>
      </div>
    </div>
    </a>

    {/* Priyanshu */}
    <a href="https://www.linkedin.com/in/priyanshu-kumar-rai-195294219/"><div className="team-card flex items-center gap-4 bg-cyan-950 p-4 rounded-lg shadow-md hover:shadow-lg">
      <div className="icon bg-blue-100 text-blue-600 p-3 rounded-full">
        <FaLinkedinIn size={20} />
      </div>
      <div>
        <h3 className="font-bold text-md text-sky-200">Priyanshu Kumar Rai</h3>
        <p className="text-sky-200">Backend Developer</p>
      </div>
    </div></a>
    

    {/* Vineeth */}
    <div className="team-card flex items-center gap-4 bg-cyan-950 p-4 rounded-lg shadow-md hover:shadow-lg">
      <div className="icon bg-blue-100 text-blue-600 p-3 rounded-full">
        <FaLinkedinIn size={20} />
      </div>
      <div>
        <h3 className="font-bold text-md text-sky-200">Vineeth Shenoy</h3>
        <p className="text-sky-200">DBMS & AI Recommender</p>
      </div>
    </div>
  </div>
</div>

        </div>
        <div
          className="flex-1 brightness-100 "
          style={{
            backgroundImage: `url(${Colprous})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      </div>
    );
    };
export default About;