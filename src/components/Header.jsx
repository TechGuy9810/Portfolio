import React from 'react'
import { useEffect, useState } from 'react'
import { CgMail } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdLocationOn } from "react-icons/md";
import { useRef } from 'react';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger,matchMedia);
const Header = () => {
  const [verticalMenu,setVerticalMenu] = useState(false);
  const [mail,setMail] = useState(false);
  const divRef = useRef(null);
  const buttonRef = useRef(null);
  const email = "captainsteve8851@gmail.com";
  const subject = "Hello!";
  const body = "I would like to get in touch with you.";

  // Mailto URL
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const handleClickOutside = (event) => {
    if (divRef.current &&
      !divRef.current.contains(event.target)) {
      setVerticalMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
     {/* This is for mail */}
     const handleClickOutsideMail = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setMail(false);
      }
    };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMail);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMail);
    };
  }, []);
  return (

    <>
     <p className={`lg:p-5 p-3 text-sm bg-gradient-to-br from-[#f58e18] via-[#f22a56] to-[#ff00c6] fixed left-[7%] rounded-xl font-semibold flex z-20 text-white ${mail==true?"top-[5rem] duration-200 ease-in-out":"top-[0] duration-200 ease-in-out"}`}>
     abhishek981037@gmail.com</p>
    <div className="h-[8vh] w-full bg-black text-white flex justify-between sticky top-0 z-50 lg:border-b-0 border-b-2 border-white">
<div className='h-full lg:w-[15%] w-[30%] flex lg:pl-20'>
  <div className='time w-[55%] h-full lg:flex hidden items-center justify-start gap-1'>
    <MdLocationOn className='text-white lg:flex hidden lg:size-7 size-6 font-semibold' />
    <p className='lg:flex hidden lg:text-lg text-sm font-semibold'>Delhi</p>
  </div>
  <div className='gmail lg:w-[45%] w-full h-full flex items-center lg:pl-5 pl-10 z-40'>
  <a
        href={mailtoLink}
        target="_blank"
        rel="noopener noreferrer"
      ><CgMail className='flex size-7 items-center justify-start cursor-pointer' onMouseEnter={()=>setMail(true)} onMouseLeave={()=>setMail(false)} title='Click to navigate gmail'/></a>
  </div>
</div>
<div className='h-full lg:w-[10%] w-[30%] flex lg:pr-20 pr-10 items-center justify-end'>
{verticalMenu===false?(<RiMenu3Fill className='flex size-6 items-center cursor-pointer' onClick={()=>setVerticalMenu(!verticalMenu)}/>):(
<FaXmark className='flex size-6 items-center cursor-pointer' onClick={()=>setVerticalMenu(!verticalMenu)}/>)}

<div className={`text-white bg-black lg:h-[92vh] h-full lg:w-[25rem] md:w-[40rem] lg:border-l-2 border-l-0 border-white w-full fixed lg:top-[8vh] top-[7vh] right-0 z-50 flex flex-col ${verticalMenu?'right-0 duration-500 ease-in-out':'lg:right-[-25rem] right-full duration-300 ease-in'}`} ref={divRef}>
<div className='h-full w-full flex flex-col'>
<div className='h-[10%] w-full flex justify-start items-center border-b-2 border-white'>
<NavLink to="/" className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center" onClick={()=>setVerticalMenu(!verticalMenu)}>
    <span className="absolute w-full h-0 transition-all duration-300 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-xl font-semibold transition duration-100 ease">Home</span>
</NavLink>
</div>
<div className='h-[10%] w-full flex justify-start items-center border-b-2 border-white'>
<NavLink to="/project" className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center" onClick={()=>setVerticalMenu(!verticalMenu)}>
    <span className="absolute w-full h-0 transition-all duration-300 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-xl font-semibold transition duration-100 ease">Projects</span>
</NavLink>
</div>
<div className='h-[10%] w-full flex justify-start items-center border-b-2 border-white'>
<NavLink to='./resume.pdf' target='blank' className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center" onClick={()=>setVerticalMenu(!verticalMenu)}>
    <span className="absolute w-full h-0 transition-all duration-300 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-xl font-semibold transition duration-100 ease">Resume</span>
</NavLink>
</div>
<div className='h-[10%] w-full flex justify-start items-center border-b-2 border-white'>
<NavLink className="overflow-hidden relative group cursor-pointer h-full w-full flex justify-center items-center" onClick={()=>setVerticalMenu(!verticalMenu)}>
    <span className="absolute w-full h-0 transition-all duration-300 origin-center rotate-135 -translate-x-30 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white group-hover:text-black lg:text-2xl text-xl font-semibold transition duration-100 ease">About</span>
</NavLink>
</div>
</div>
</div>
</div>
    <div className='linksBars absolute h-[18vh] w-[28vw] top-[87vh] text-center left-[31%] lg:flex hidden justify-end items-center pr-2'>
            <div className='h-[30%] w-[60%] rounded-lg p-2 flex flex-row justify-center gap-12 items-center bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-lg border border-white/30 shadow-[0_4px_20px_0_rgba(0,0,0,0.20)]'>
              <a href="https://github.com/TechGuy9810" target="_blank" rel="noopener noreferrer"><FaGithub className='size-6 cursor-pointer  text-slate-500'/></a>
             <a href="https://www.linkedin.com/in/abhishek-for-u/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='size-6 text-blue-500 cursor-pointer'/></a>
             <a href="https://leetcode.com/u/Abhishek9810/" target="_blank" rel="noopener noreferrer"><SiLeetcode className='size-6 text-yellow-500 cursor-pointer' /></a>
            </div>
            {/* <div className='h-[30%] w-[70%] bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] rounded-lg flex justify-center items-center'>
             <div className='bg-gray-900 flex flex-col justify-center gap-6 items-center p-2 w-[90%] h-[97%] rounded-lg'>
             <a href="https://github.com/TechGuy9810" target="_blank" rel="noopener noreferrer"><FaGithub className='size-8 text-white cursor-pointer'/></a>
             <a href="https://www.linkedin.com/in/abhishek-for-u/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='size-8 text-white cursor-pointer'/></a>
             <a href="https://leetcode.com/u/Abhishek9810/" target="_blank" rel="noopener noreferrer"><SiLeetcode className='size-8 text-white cursor-pointer' /></a>
             </div>
            </div> */}
      </div>
      
    </div>
    
    </>
  );
}

export default Header
