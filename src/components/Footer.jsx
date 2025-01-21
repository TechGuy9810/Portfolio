import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    
    <div className="lg:h-[75vh] h-auto w-full bg-black flex flex-col">
<div className="lg:h-[90%] h-[95%] w-full bg-black text-white lg:flex items-center justify-center hidden">
<div className="left lg:h-full lg:w-[50%] w-full h-[50%] border-2 border-white border-r-0 border-l-0 flex flex-col">
<div className="thought h-[40%] w-full flex flex-col justify-center lg:pl-20 pl-10 gap-2">
    <p className="lg:text-4xl text-2xl font-bold font-Monoton tracking-wider">I Make Awesome WebApps !</p>
    <p className="lg:text-2xl text-md font-Monoton tracking-widest">Bringing Ideas To Reality</p>
</div>
<div className="profilePhoto h-[60%] w-full flex items-center lg:pl-20 pl-10 gap-2 p-5 overflow-hidden justify-center">
    <img src="./rocket.jpg" alt="" className="bg-cover w-[50%] rounded-xl"/>
    <div className="h-full w-[50%] flex justify-start items-center">
        <p className="lg:text-2xl text-xl font-bold">New Delhi, India</p>
    </div>
</div>
</div>
<div className="right lg:h-full lg:w-[50%] w-full h-[50%] grid grid-rows-5">
<div className="footerShow border-2 border-white border-b-0 flex justify-center items-center h-full w-full" >
<NavLink to="/project" target="blank" className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center">
    <span className="absolute w-full h-0 transition-all duration-700 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-md font-semibold transition duration-300 ease font-Monoton tracking-wider">Projects</span>
</NavLink>
</div>
<div className="footerShow border-2 border-white border-b-0 flex justify-center items-center h-full w-full" >
<NavLink to="./resume.pdf" target="blank" className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center">
    <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-md font-semibold transition duration-300 ease font-Monoton tracking-wider">Resume</span>
</NavLink>
</div>
<div className="footerShow border-2 border-white border-b-0 flex justify-center items-center h-full w-full">
<NavLink className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center">
    <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-md font-semibold transition duration-300 ease font-Monoton tracking-wider">Services</span>
</NavLink>
</div>
<div className="footerShow border-2 border-white border-b-0 flex justify-center items-center h-full w-full" >
<NavLink className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center">
    <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-md font-semibold transition duration-300 ease font-Monoton tracking-wider">About</span>
</NavLink>
</div>
<div className="border-2 border-white lg:border-b-2 border-b-0 flex justify-center">
<div className="h-full w-[80%] flex justify-center items-center gap-14">
<a href="https://www.linkedin.com/in/abhishek-for-u/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="lg:size-6 size-4 cursor-pointer" /></a>
<a href="https://github.com/TechGuy9810" target="_blank" rel="noopener noreferrer"><TbBrandGithubFilled className="lg:size-6 size-4 cursor-pointer" /></a>
<a href="https://leetcode.com/u/Abhishek9810/" target="_blank" rel="noopener noreferrer"><SiLeetcode className="lg:size-6 size-4 cursor-pointer"  /></a>
</div>
</div>
</div>
</div>
<div className="lg:h-[10%] h-[6vh] w-full flex justify-center items-center lg:border-0 border-2 border-white border-t-0 border-b-0 border-l-0 border-r-0 tracking-wide">
    <p className="text-gray-200 lg:text-md font-semibold text-sm">© Portfolio by - Abhishek Singh.</p>
</div>
    </div>
  );
};

export default Footer;

