import React, { useEffect } from 'react'
import { gsap } from "gsap";
const Cursor = () => {
      useEffect(()=>{
        const handleMouseMove = (e)=>{
            gsap.to(".cursor",{
              x:e.clientX-20/2,
              y:e.clientY-20/2,
              duration:0.5,
              ease:"power1.out"
            });
        }
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            window.removeEventListener("mousemove",handleMouseMove);
        };
      },[]);
  return (
<div className='cursor h-[60px] w-[60px] bg-white absolute top-0 left-0 rounded-full'></div>
  )
}

export default Cursor
