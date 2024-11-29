import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width,start,para,hover="false"}) {
  return (
    <motion.div 
    whileHover={{backgroundColor: hover === "true" && "#7443ff", padding:"25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
       <div className='w-full'>
       <div className="w-full flex justify-between items-center">
            <h3>heading</h3>
            <FaArrowRightLong />
        </div>
        <h1 className='text-3xl font-medium'>Who we are</h1>
       </div>
       <div className="down w-full ">
        {
           start === true && (
            <>
            <h1 className='text-6xl font-medium tracking-tighter leading-none'>Explore </h1>
            <button className='rounded-full mt-5 py-2 border-[1px] border-zinc-50 px-5'>Contat us</button>
            </>
           ) 
        }
        { para && (
            <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        )}
        
       </div>
    </motion.div>
  )
}

export default Card
