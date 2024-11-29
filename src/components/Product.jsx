import React from 'react'
import Button from './Button'

function Product({item,mover,count}) {
  return (
    <div className='w-full py-20 text-white h-[23rem]'>
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
       <h1 className='text-6xl capitalize font-medium'>{item.title}</h1>
       <div className="dets w-1/3">
        <p className='mb-10'>{item.description}</p>
        <div className='flex gap-5 items-center'>
        {item.live && <Button />} 
        {item.case && <Button title='Case Studies'/>}
        </div>
       </div>
      </div>
    </div>
  )
}

export default Product
