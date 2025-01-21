import React, { useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import { useRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub} from 'react-icons/fa';
import { SiMongodb, SiRazorpay, SiCloudinary, SiSocketdotio } from "react-icons/si";
import { FaCircleCheck} from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import { LuMoveDown } from "react-icons/lu";
import { Link} from "react-router-dom";
import FAQ from './Faq';
import {projectsData} from './ProjectData';
gsap.registerPlugin(useGSAP,ScrollTrigger,matchMedia);
const Home = () => {
  const containerRef = useRef(null);
  const svgRefDesktop = useRef(null);
  const svgRefPhone = useRef(null);
  const containerRef2 = useRef(null);
  const ProjectRef = useRef(null);
  const popupRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const targetPositions = [
    { x: 259, y: 227, ref: popupRefs[0] },
    { x: 849, y: 424, ref: popupRefs[1] },
    { x: 18, y: 564, ref: popupRefs[2] },
    { x: 555, y: 624, ref: popupRefs[3] },
    { x: 1035, y: 615, ref: popupRefs[4] },
    {x: 1152, y: 800, ref:popupRefs[5]}
  ];
  const [isFlipped,setIsFlipped] = useState({
    div1:false,
    div2:false,
    div3:false
  });
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
const handleScroll = ()=>{
  if (ProjectRef.current) {
    ProjectRef.current.scrollIntoView({ behavior: "smooth" });
  }
}
useGSAP(()=>{
  let mm = gsap.matchMedia();
  const mySplitText = new SplitType('#creatorName');
  gsap.from('.char',{
    yPercent:85,
    stagger:0.03,
    ease:'back.inOut',
    duration:1,
  });
    setTimeout(() => {
    SplitType.revert('#creatorName')
  }, "1300");
  let tl = gsap.timeline({
    scrollTrigger:{
       trigger:'.skillsContainer',
       pin:'.skillsContainer',
       scrub:true,
       scroller:"body",
       start:"top 23%",
       end:"bottom 0",
      //  markers:true
    }
  });
tl.to("#javascript",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#react",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#node",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#c",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#mongodb, #sql",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#express, #postgresql",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#html, #css",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#dsa",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
}).to("#computerNetworks, #operatingSystem",{
  opacity:1,
  filter:"blur(0px)",
  delay:0.6
});

mm.add("(max-width: 700px)",()=>{
  const path = svgRefPhone.current;
const pathLength = path.getTotalLength();
gsap.set(path,{strokeDasharray:4});
gsap.fromTo(path,{
strokeDashoffset:pathLength,
},{
strokeDashoffset:0,
ease:"none",
})
   gsap.to(".name",{
   scrollTrigger:{
     trigger:".heroSection",
     scroller:"body",
     start:"top 8%",
     end:"bottom 70%",
    //  markers:"true",
     scrub:true,
   },
   ease: "power2.inOut",
   position:"fixed",
   top:"2.2%",
   left:"30%",
   width:"fit-content",
   zIndex:"9999",
   fontSize:"1.2rem",
   fontWeight:"800",
   color:"white",
  })
})
 mm.add("(min-width: 1400px)", () => {
  gsap.to(".name",{
   scrollTrigger:{
     trigger:".heroSection",
     scroller:"body",
     start:"top 8%",
     end:"bottom 60%",
    //  markers:"true",
     scrub:true,
   },
   ease: "power2.inOut",
   position:"fixed",
   top:"1.4%",
   left:"40%",
   width:"fit-content",
   zIndex:"9999",
   fontSize:"2rem",
   color:"white"
  })
  gsap.to(".designation",{
    scrollTrigger:{
      trigger:".heroSection",
      scrub:true
    },
    display:"hidden",
    ease: "back.inOut(1.7)",
  })
  const path = svgRefDesktop.current;
  const container = containerRef2.current;
  const pathLength = path.getTotalLength();
  gsap.set(path,{strokeDasharray:pathLength});
  gsap.fromTo(path,{
  strokeDashoffset:pathLength,
  },{
  strokeDashoffset:0,
  ease:"none",
  scrollTrigger:{
    trigger:'.svgContainer',
    start:"top 8%",
    end:"bottom 0",
    pin: true,
    scrub:true,
          onUpdate: self => {
            const currentOffset = gsap.getProperty(path, "strokeDashoffset");
  
            // Get the current point on the SVG path
            const currentPoint = path.getPointAtLength(pathLength - currentOffset);
            const containerRect = container.getBoundingClientRect();
  
            // Calculate the position relative to the container
            const relativeX = currentPoint.x + containerRect.left;
            const relativeY = currentPoint.y + containerRect.top;
            console.log(relativeX, relativeY);
            // Update visibility for each popup div
            targetPositions.forEach((position) => {
              const { x, y, ref } = position;
              const popup = ref.current;
              // Show the div if the line's current position is close to the target
              const threshold = 100; // Adjust for tolerance
              if (
                (Math.abs(relativeX - x) < threshold || (relativeX>x) ) &&
                (Math.abs(relativeY - y) < threshold || (relativeY>y))
              ) {
                // console.log(relativeX-x, relativeY-y);
                popup.style.opacity = 1;
                popup.style.display = "flex";
              }
            });
            },
    // markers:true
  }
  });
 });
gsap.to(".projectsHeading",{
  fontSize:"10rem",
  scrollTrigger:{
    trigger:".projects",
    scrub:true,
    // markers:true,
    start:"top 0",
    end:"bottom 50%"
  }
})
gsap.from(".projectsHeading",{
  scrollTrigger:{
    trigger:".projects",
    scrub:true,
    // markers:true,
    start:"top 60%",
    end:"bottom 100%"
  },
  yPercent:80,
  ease:'back.inOut',
  duration:0.8,
})

 const sections = containerRef.current.children;
 gsap.to(sections, {
   xPercent: -100 * (sections.length-1),
   ease: 'none',
   scrollTrigger: {
     trigger: '.projects',
     pin: true,
     scrub: 1,
     end: "300% 40%",
    //  markers:true,
     start:"0 0",
   },
 });


})
  return (
    <ReactLenis root>
    <div className="w-full h-full bg-black">
      <div className='heroSection z-[0] bg-heroSectionImage bg-cover bg-center bg-no-repeat w-full max-w-screen lg:h-[90vh] h-[92vh] overflow-hidden'>
           <p id='creatorName' className='name lg:left-[14%] md:left-[18%] left-[10%] clip-your-needful-style absolute lg:top-[28%] md:top- top-[25%] flex text-center lg:text-[9rem] md:text-[4rem] text-[40px] text-black font-extrabold font-sans whitespace-nowrap'>Abhishek Singh.</p>
           <div className='designation lg:top-[50%] top-[33%] flex flex-col absolute lg:h-[45%] h-[25%] w-full'>
            <p className='w-full text-center lg:text-[3rem] md:text-[2rem] md:font-extrabold lg:font-extrabold text-[1.3rem] text-black font-bold h-auto'>Full Stack Developer</p>
            <div className='w-full h-full'>
            <div className='w-full directs flex items-start justify-center lg:gap-10 gap-5 lg:pt-0 pt-2'>
            <a href='./resume.pdf' target='blank' className="block rounded-md px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black z-50">
  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
  <span className="relative text-black font-semibold transition duration-300 group-hover:text-white ease">Download CV</span>
</a>
<Link to="/project" className="block rounded-md px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black z-50">
<span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
  <span className="relative text-black font-semibold transition duration-300 group-hover:text-white ease">My Projects</span>
</Link>
</div>
<div className=' w-full h-[80%] lg:pt-0 pt-10'>
<div className="relative grid place-items-center">

  <div className="absolute w-full h-full bg-none items-center flex">
        <div className="relative h-[75%] w-full flex justify-center items-start overflow-hidden">
        <LuMoveDown className="absolute animate-move-down  lg:text-5xl md:text-5xl md:font-extrabold text-3xl text-gray-800 font-bolder" />
  </div>
  </div>
        {/* Rotating Text */}
        <svg
          viewBox="0 0 200 200"
          width="140"
          height="140"
          className="animate-spin-slow lg:hidden md:hidden flex"
        >
          <defs>
          <path
  id="circle"
  d="M 100, 100
     m -85, 0
     a 85, 85 0 1, 0 170, 0
     a 85, 85 0 1, 0 -170, 0
     "
></path>
          </defs>
          <text width="400">
            <textPath
              alignmentBaseline="top"
              href="#circle"
              className="font-semibold uppercase text-[17px] fill-[#111] tracking-widest"
            >
              Scroll Down to See My Bio. Scroll Down To see.
            </textPath>
          </text>
        </svg>
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          className="animate-spin-slow lg:flex md:flex hidden"
        >
          <defs>
          <path
  id="circle"
  d="M 100, 100
     m -85, 0
     a 85, 85 0 1, 0 170, 0
     a 85, 85 0 1, 0 -170, 0
     "
></path>
          </defs>
          <text width="400">
            <textPath
              alignmentBaseline="top"
              href="#circle"
              className="font-semibold uppercase text-[17px] fill-[#111] tracking-widest"
            >
              Scroll Down to See My Bio. Scroll Down To see.
            </textPath>
          </text>
        </svg>
      </div>
</div>
            </div>
            
           </div>

      </div>

      
      <div className='skillsContainer lg:h-[60vh] h-[65vh] w-full bg-black flex flex-col items-center justify-center'>
      <div className='skills lg:h-[15%] h-[10%] w-full flex justify-center items-end'>
        <p className='skillsHeading lg:text-[2rem] text-[1.5rem] text-white lg:font-bold font-normal font-Monoton tracking-wide'>My Skills</p>
      </div>
      <div className="skillsDiv grid grid-cols-2 lg:gap-x-10 lg:gap-y-6 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:p-6 pl-10 pr-10 p-6 lg:pt-12 lg:pb-12 lg:h-[85%] h-[90%]">
        <div id='react' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black flex justify-center items-center skillName blur-[8px] opacity-0 transition ease-bezier duration-500">
          React.Js
        </div>
        <div id='node' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Node.Js
        </div>
        <div id='c' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          C++
        </div>
        <div id='javascript' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Javascript
        </div>
        <div id='express' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Express.Js
        </div>
        <div id='mongodb' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          MongoDb
        </div>
        <div id='sql' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          SQL
        </div>
        <div id='dsa' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          DSA
        </div>
        <div id='postgresql' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Postgresql
        </div>
        <div id='html' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Redis
        </div>
        <div id='operatingSystem' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Operating System
        </div>
        <div id='computerNetworks' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Computer Networks
        </div>
        <div id='css' className="lg:px-6 lg:py-4 px-4 py-2 text-white bg-black border border-white rounded-full text-center hover:bg-white hover:text-black transition flex justify-center items-center skillName blur-[8px] opacity-0 font-semibold ease-bezier duration-500">
          Tailwind
        </div>
      </div>
      </div>

<div className="svgContainer bg-black h-[95vh] w-full flex justify-center items-center overflow-hidden relative" ref={containerRef2}>
<svg width="1159" height="738" viewBox="0 0 1159 738" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:flex hidden absolute z-10'>
<path ref={svgRefDesktop} d="M61 1C61 1 13.0001 117.88 82.9594 153.807C152.919 189.734 806.918 123.596 969.959 156.257C1133 188.917 1115 331.807 969.959 356.075C824.918 380.343 222.917 293.371 86.9585 352.598C-49 411.825 1 519.604 86.9584 556.348C172.917 593.091 971.001 527.77 1077 556.348C1183 584.925 1152 737 1152 737" stroke="white" strokeWidth="4"/>
</svg>
<svg width="324" height="764" viewBox="0 0 324 764" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:hidden flex absolute'>
<path ref={svgRefPhone} d="M18.1707 1C18.1707 1 4.85492 122.009 24.2626 159.205C43.6702 196.401 225.098 127.927 270.328 161.741C315.558 195.555 310.564 343.493 270.328 368.618C230.092 393.743 63.0887 303.699 25.372 365.018C-12.3447 426.338 1.52594 537.925 25.3719 575.966C49.218 614.007 270.617 546.378 300.023 575.966C329.429 605.553 320.829 763 320.829 763" stroke="white" strokeWidth="4"/>
</svg>
<div className='h-[10%] w-[5%] absolute lg:flex hidden top-[1%] left-[15%] rounded-full overflow-hidden z-30'>
  <img className='w-full h-full object-cover object-center' src="./profile.jpeg" alt="" />
</div>
<div className='classTenth lg:h-[30%] md:h-[10%] h-[13%] lg:w-[15%] md:w-[25%] w-[50%] lg:gap-0 gap-2 z-20 absolute lg:top-[6%] md:top-[4%] lg:left-[25%] md:left-[19%] top-[5%] left-[25%] flex flex-col justify-start items-center'>
  <div className='h-[50%] w-full flex flex-col justify-center items-center'>
    <p className='text-white font-semibold lg:text-2xl text-md'>Class 10th</p>
    <p className='text-white font-semibold lg:hidden flex lg:opacity-0 opacity-1 lg:gap-2 items-center justify-center' ref={popupRefs[0]}>8.0 Cgpa <span className='font-normal text-gray-200'>(In Top 10)</span> <FaCircleCheck className='text-green-500'/></p>
  </div>
  <div className='lg:h-[20%] lg:w-[18%] h-[30%] w-[15%] rounded-full border-2 border-white flex justify-center items-center'>
    <div className='h-[80%] w-[80%] bg-white rounded-full'></div>
  </div>
</div>
<div className='classTweve lg:h-[30%] md:h-[20%] lg:w-[15%] w-[30%] h-[15%] lg:gap-0 gap-2 z-20 absolute lg:top-[22%] md:top-[31%] lg:left-[60%] md:left-[45%] top-[35%] left-[55%] flex flex-col justify-end items-center'>
<div className='h-[50%] w-full flex flex-col justify-center items-center'>
    <p className='text-white font-semibold lg:text-2xl text-md'>Class 12th</p>
    <p className='text-white font-semibold lg:hidden flex lg:opacity-0 opacity-1 lg:gap-2 items-center justify-center' ref={popupRefs[1]}>75% <span className='font-normal text-gray-200'>(PCM)</span><FaCircleCheck className='text-green-500'/></p>
  </div>
  <div className='h-[20%] w-[18%] rounded-full border-2 border-white flex justify-center items-center'>
  <div className='h-[80%] w-[80%] bg-white rounded-full'></div>
  </div>
</div>
<div className='firstYear lg:h-[30%] md:h-[20%] lg:w-[15%] md:w-[33%] w-[54%] h-[15%] z-20 absolute lg:top-[50%] md:top-[50%] lg:gap-0 gap-2 lg:left-[2%] md:left-[28%] top-[50%] left-[4%] flex lg:flex-row flex-col lg:justify-end lg:items-center'>
<div className='h-[50%] w-full flex flex-col justify-center items-center'>
    <p className='text-white font-semibold lg:text-2xl text-md'>BCA 1st Year</p>
    <p className='text-white font-semibold lg:hidden flex lg:opacity-0 opacity-1 lg:gap-2 items-center justify-center' ref={popupRefs[2]}>8.0 Cgpa <span className='font-normal text-gray-200'>(2021-2022)</span><FaCircleCheck className='text-green-500'/></p>
  </div>
  <div className='lg:h-[20%] lg:w-[23%] h-[20%] w-[15%] rounded-full border-2 border-white flex justify-center items-center'>
  <div className='h-[80%] w-[80%] bg-white rounded-full'></div>
  </div>
</div>
<div className='secondYear lg:h-[30%] md:h-[20%] lg:w-[15%] md:w-[30%] w-[50%] h-[15%] z-20 absolute lg:top-[47%] md:top-[51%] lg:gap-0 gap-2 lg:left-[40%] md:left-[52%] top-[68%] left-[10%] flex flex-col justify-end items-center'>
<div className='h-[50%] w-full flex flex-col justify-center items-center'>
    <p className='text-white font-semibold lg:text-2xl text-md'>BCA 2nd Year</p>
    <p className='text-white font-semibold lg:hidden flex lg:opacity-0 opacity-1 lg:gap-2 items-center justify-center' ref={popupRefs[3]}>8.5 Cgpa <span className='font-normal text-gray-200'>(2022-2023)</span><FaCircleCheck className='text-green-500'/></p>
  </div>
  <div className='lg:h-[20%] lg:w-[18%] h-[20%] w-[15%] rounded-full border-2 border-white flex justify-center items-center'>
  <div className='h-[80%] w-[80%] bg-white rounded-full'></div>
  </div>
</div>
<div className='thirdYear lg:h-[30%] md:h-[20%] lg:w-[15%] md:w-[30%] w-[45%] h-[15%] z-20 absolute lg:top-[55%] md:top-[76%] top-[85%] lg:gap-0 gap-2 lg:left-[77%] md:left-[43%] left-[50%] flex flex-col justify-start lg:items-start items-end'>
<div className='h-[50%] w-full flex flex-col justify-center items-center'>
    <p className='text-white font-semibold lg:text-2xl text-md'>BCA 3rd Year</p>
    <p className='text-white font-semibold lg:hidden flex lg:opacity-0 opacity-1 lg:gap-2 items-center justify-center' ref={popupRefs[4]}>8.5 Cgpa <span className='font-normal text-gray-200'>(2023-2024)</span><FaCircleCheck className='text-green-500'/></p>
  </div>
  <div className='h-[20%] w-[18%] rounded-full border-2 border-white flex justify-center items-center'>
  <div className='h-[80%] w-[80%] bg-white rounded-full'></div>
  </div>
</div>
<div className='h-[10%] w-[5%] absolute lg:flex hidden top-[88%] right-[12%] rounded-full overflow-hidden z-30'>
  <img className='w-full h-full object-cover object-center lg:opacity-0 opacity-1 lg:hidden flex'ref={popupRefs[5]} src="./degree.jpg" alt="Graduated" title='graduated' />
</div>
</div>

      <div className='projects h-[100vh] w-full lg:flex lg:flex-col hidden overflow-hidden relative bg-white' ref={ProjectRef}>
        <div className='h-full z-10 top-0 left-0 w-full absolute flex justify-center items-center'>
          <p className='projectsHeading lg:text-[16rem] text-5xl font-Monoton lg:font-bold font-normal tracking-wide clip-your-needful-style'>Projects</p>
        </div>
<div
        ref={containerRef}
        className="w-full h-full flex z-20"
        style={{ display: 'flex', flexWrap: 'nowrap' }}
      >
<div className='h-full w-full z-30 flex justify-center items-center shrink-0 m-auto'></div>
          <div className='h-full w-full z-30 flex justify-center items-center shrink-0 m-auto'>
        <ReactCardFlip isFlipped={isFlipped.div1} flipDirection="horizontal">
        <img src='./project1.png' className='lg:h-[70vh] lg:w-[60vw] h-[50vh] w-[80vw] rounded-lg' onClick={()=>setIsFlipped(prev=>({...prev,div1:true}))}/>
        <div className='lg:h-[70vh] lg:w-[60vw] h-[55vh] w-[80vw] mx-auto flex flex-col justify-center text-center bg-white border border-gray-500 lg:p-10 p-6 shadow-md rounded-lg'>
        <h1 className="lg:text-[2rem] text-[1.5rem] font-bold text-black">
        Hotel Reservation Site
      </h1>
      <div className="text-left lg:pt-6 lg:pb-6 pt-3 pb-3">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Integrated Razorpay for secure and swift payments.</li>
          <li>Responsive design powered by Tailwind CSS for all devices.</li>
          <li>Email verification feature using Nodemailer for user authentication.</li>
          <li>End-to-end functionality for booking and managing reservations.</li>
        </ul>
      </div>
      <div className="text-left">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Technologies Used (MERN)</h2>
        <div className="flex justify-c items-center space-x-4 text-gray-600 lg:text-3xl text-xl">
          <FaReact title="React.js" />
          <FaNodeJs title="Node.js" />
          <SiMongodb title="MongoDB"/>
          <FaCss3Alt title="Tailwind CSS" />
          <SiRazorpay title="RazorPay"/>
        </div>
      </div>
      <div className="text-left lg:pt-6 lg:pb-6 pt-3 pb-3">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Project Links</h2>
        <div className="flex justify-c items-center space-x-4">
        <a href='https://github.com/TechGuy9810/HotelSite/tree/master' target='blank'><FaGithub className='cursor-pointer text-gray-600 lg:text-3xl text-xl'/></a>
      <a href='https://hotelbooking-production-542f.up.railway.app/' target='blank' className='cursor-pointer lg:pt-2 lg:pb-4 lg:pl-4 lg:pr-4 pt-1 pb-1 pl-2 pr-2 border-2 border-gray-600 rounded-md font-bold flex justify-center items-center text-gray-600'>Live Site</a>
      <button className='cursor-pointer lg:pt-2 lg:pb-4 lg:pl-4 lg:pr-4 pt-1 pb-1 pl-2 pr-2 border-2 border-gray-600 rounded-md font-bold flex justify-center items-center text-gray-600' onClick={()=>setIsFlipped(prev=>({...prev,div1:false}))}><RiArrowGoBackFill /></button>
        </div>
      </div>
        </div>
         </ReactCardFlip>
         </div>


          <div className='h-full w-full z-30 flex justify-center items-center shrink-0 m-auto'>
        <ReactCardFlip isFlipped={isFlipped.div2} flipDirection="horizontal">
        <img src='./project2.png' className='lg:h-[70vh] lg:w-[60vw] h-[50vh] w-[80vw] rounded-lg' onClick={()=>setIsFlipped(prev=>({...prev,div2:true}))}/>
        <div className='lg:h-[70vh] lg:w-[60vw] h-[55vh] w-[80vw] mx-auto flex flex-col justify-center text-center bg-white border border-gray-500 lg:p-10 p-6 shadow-md rounded-lg'>
        <h1 className="lg:text-[2rem] text-[1.5rem] font-bold text-black">
        Realtime Web Chat App.
      </h1>
      <div className="text-left lg:pt-6 lg:pb-6 pt-3 pb-3">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Image, emoji, and video sharing capabilities.</li>
        <li>Image Downloading Functionality</li>
          <li>Responsive design for all devices.</li>
          <li>Real-time features: User online status and typing indicator.</li>
        </ul>
      </div>
      <div className="text-left">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Technologies Used (MERN)</h2>
        <div className="flex justify-c items-center space-x-4 text-gray-600 lg:text-3xl text-xl">
        <FaReact title="React.js" />
          <FaNodeJs title="Node.js" />
          <SiMongodb title="MongoDB"/>
          <SiCloudinary title="Cloudinary" />
          <SiSocketdotio title="Socket.IO" />
          <FaCss3Alt title="Tailwind CSS" />
        </div>
      </div>

      <div className="text-left lg:pt-6 lg:pb-6 pt-3 pb-3">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Project Links</h2>
        <div className="flex justify-c items-center space-x-4">
        <a href='https://github.com/TechGuy9810/ChatApp' target='blank'><FaGithub className='cursor-pointer text-gray-600 lg:text-3xl text-xl'/></a>
      <a href='https://chatapp-production-e859.up.railway.app/' target='blank' className='cursor-pointer lg:pt-2 lg:pb-4 lg:pl-4 lg:pr-4 pt-1 pb-1 pl-2 pr-2 border-2 border-gray-600 rounded-md font-bold flex justify-center items-center text-gray-600'>Live Site</a>
      <button className='cursor-pointer lg:pt-2 lg:pb-4 lg:pl-4 lg:pr-4 pt-1 pb-1 pl-2 pr-2 border-2 border-gray-600 rounded-md font-bold flex justify-center items-center text-gray-600' onClick={()=>setIsFlipped(prev=>({...prev,div2:false}))}><RiArrowGoBackFill /></button>
        </div>
      </div>
        </div>
         </ReactCardFlip>
         </div>


         <div className='h-full w-full z-30 flex justify-center items-center shrink-0 m-auto'>
        <ReactCardFlip isFlipped={isFlipped.div3} flipDirection="horizontal">
        <img src='./project1.png' className='lg:h-[70vh] lg:w-[60vw] h-[50vh] w-[80vw] rounded-lg' onClick={()=>setIsFlipped(prev=>({...prev,div3:true}))}/>
        <div className='lg:h-[70vh] lg:w-[60vw] h-[55vh] w-[80vw] mx-auto flex flex-col justify-center text-center bg-white border border-gray-500 lg:p-10 p-6 shadow-md rounded-lg'>
        <h1 className="lg:text-[2rem] text-[1.5rem] font-bold text-black">
        AI ChatBot
      </h1>
      <div className="text-left lg:pt-6 lg:pb-6 pt-3 pb-3">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Integrated Google's gemini for the live solutions.</li>
          <li>Responsive design powered by Tailwind CSS for all devices.</li>
          <li>Chat history storage functionality</li>
          <li>Chat, Image and Code Generation.</li>
        </ul>
      </div>
      <div className="text-left">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Technologies Used (MERN)</h2>
        <div className="flex justify-c items-center space-x-4 text-gray-600 lg:text-3xl text-xl">
          <FaReact title="React.js" />
          <FaNodeJs title="Node.js" />
          <SiMongodb title="MongoDB"/>
          <FaCss3Alt title="Tailwind CSS" />
        </div>
      </div>
      <div className="text-left lg:pt-6 lg:pb-6 pt-3 pb-3">
        <h2 className="lg:text-lg text-md font-semibold text-gray-800 mb-2">Project Links</h2>
        <div className="flex justify-c items-center space-x-4">
        <FaGithub className='cursor-pointer text-gray-600 lg:text-3xl text-xl'/>
      <button className='cursor-pointer lg:pt-2 lg:pb-4 lg:pl-4 lg:pr-4 pt-1 pb-1 pl-2 pr-2 border-2 border-gray-600 rounded-md font-bold flex justify-center items-center text-gray-600'>Live Site</button>
      <button className='cursor-pointer lg:pt-2 lg:pb-4 lg:pl-4 lg:pr-4 pt-1 pb-1 pl-2 pr-2 border-2 border-gray-600 rounded-md font-bold flex justify-center items-center text-gray-600' onClick={()=>setIsFlipped(prev=>({...prev,div3:false}))}><RiArrowGoBackFill /></button>
        </div>
      </div>
        </div>
         </ReactCardFlip>
         </div>
         
      </div>
</div>




<div className='lg:hidden flex flex-col min-h-[90vh] h-auto w-full lg:pl-20 lg:pr-20 pl-10 pr-10'>
    <div className="bg-black text-white py-10">
    <h1 className="text-4xl font-bold mb-10 font-Monoton text-center">Selected Projects</h1>
    <div className="flex flex-col gap-8 lg:gap-12">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="bg-black border-2 border-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-20 lg:space-x-6 p-6"
        >
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 lg:h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-grow space-y-4 h-full">
                <h2 className="lg:text-4xl text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                {/* Split description into sentences and render each as a new line */}
                <div className="text-sm text-gray-300 flex-grow space-y-2">
                  {project.description.split(/(?=\d)/).map((sentence, i) => (
                    <p key={i}>{sentence.trim()}.</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="no-underline flex lg:gap-4 gap-4 w-auto whitespace-nowrap items-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                    >
                      <FaGithub className="lg:size-6 size-6 text-white cursor-pointer" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.website}
                      className="relative inline-flex items-center justify-center pt-1 pb-1 pl-4 pr-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        live
                      </span>
                      <span className="relative invisible">live</span>
                    </a>
                  </div>
                </div>
              </div>
        </div>
      ))}
    </div>
  </div>
  </div>
<FAQ/>

      </div>
      </ReactLenis>
  )
}

export default Home
