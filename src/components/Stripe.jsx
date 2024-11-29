import React from 'react'

function stripe({val}) {
  return (
    <div className='w-[16.66%] p-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] px-4 py-5 flex justify-between items-center border-zinc-600'>
     <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default stripe
