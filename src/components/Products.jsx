import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
    var products = [
        {
          title: "Arqitel",
          description:
            "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
          live: true,
          case: false,
        },
        {
          title: "TTR",
          description:
            "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
          live: true,
          case: false,
        },
        {
          title: "YIR 2022",
          description:
            "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
          live: true,
          case: false,
        },
        {
          title: "Yahoo!",
          description:
            "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
          live: true,
          case: true,
        },
        {
          title: "Rainfall",
          description:
            "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
          live: true,
          case: true,
        },
    ];

    const [pos,setPos] = useState(0);
    const mover = (val) => {
      setPos(val*23);
    }
    

  return (
    <div className='mt-20 relative'>
        {products.map((item,index)=>
        <Product key={index} mover={mover} item={item} count={index}/>)}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div 
          initial={{y:pos, x:"-50%"}}
          animate={{y:pos+`rem`}}
          transition={{ease:[0.83, 0, 0.17, 1],duration:0.6}}
          className="window absolute w-[32rem] h-[23rem] left-[43%] overflow-hidden">
          <motion.video
          src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm"
          autoPlay muted loop
          animate={{y:-pos + `rem`}}
         transition={{ease:[0.83, 0, 0.17, 1],duration:.6}}
          className="w-full h-full  bg-zinc-100">
          </motion.video> 
          <motion.video
            autoPlay muted loop
            src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm" 
            animate={{y:-pos + `rem`}}
            transition={{ease:[0.83, 0, 0.17, 1],duration:.6}}
          className="w-full h-full  bg-zinc-100">
          </motion.video>
          <motion.video 
          autoPlay muted loop
            src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-169.webm"
            animate={{y:-pos + `rem`}}
            transition={{ease:[0.83, 0, 0.17, 1],duration:.6}}
          className="w-full h-full  bg-zinc-100">
          </motion.video>
          <motion.video
          autoPlay muted loop
          src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-169.webm"
            animate={{y:-pos + `rem`}}
            transition={{ease:[0.83, 0, 0.17, 1],duration:.6}}
          className="w-full h-full  bg-zinc-100">
          </motion.video>
          <motion.video
          autoPlay muted loop 
          src='https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/weglotlikemagic-169.webm'
            animate={{y:-pos + `rem`}}
            transition={{ease:[0.83, 0, 0.17, 1],duration:.6}}
          className="w-full h-full  bg-zinc-100">
          </motion.video> 
          </motion.div>
        </div>
    </div>
  )
}

export default Products
