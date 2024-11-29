import { motion } from 'framer-motion'
import React from 'react'

function Marq({imgUrls,direction}) {
  return (
 
    <div className="flex w-full overflow-hidden">
      <motion.div 
      initial={{x:direction === 'left' ? "0" : "-100%"}} 
      animate={{x:direction === 'left' ? "-100%" : "0"}} 
      transition={{ease:"linear", duration:15, repeat: Infinity}} 
      className='flex flex-shrink-0 w-full py-10 pr-40 gap-20 '>
        {imgUrls.map((url,index) => <img key={index} src= {url} className='w-[6vw] flex-shrink-0' ></img>)}
      </motion.div>
      <motion.div 
      initial={{x:direction === 'left' ? "0" : "-100%"}} 
      animate={{x:direction === 'left' ? "-100%" : "0"}} 
      transition={{ease:"linear", duration:15, repeat: Infinity}} 
      className='flex flex-shrink-0 w-full py-10 pr-40 gap-20 '>
        {imgUrls.map((url,index) => <img key={index} src= {url} className='w-[6vw] flex-shrink-0' ></img>)}
      </motion.div>
      
      
    </div>
  )
}

export default Marq
