import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
      <div className="max-w-screen-xl mx-auto flex gap-20 py-10">
        <div className="basis-1/2">
        <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-8">
     <div className="1/3 ">
        <h1 className='capitalize text-zinc-600'>Socials</h1>
        {
        ["instagram","twitter","facebook","linkedin"].map((item,index)=> <a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>)
        }
     </div>
     <div className="1/3">
        <h1 className='capitalize text-zinc-600'>Socials</h1>
        {["instagram","twitter","facebook","linkedin"].map((item,index)=> <a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
     </div>
     <div className='basis-1/2 flex flex-col items-end'>
        <p className='text-light'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
        <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          
     </div>
        
        </div>
      </div>
    </div>
  )
}

export default Footer
