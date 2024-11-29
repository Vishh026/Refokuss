import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

function Button({title='Get started'}) {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 rounded-full text-zinc-900 flex items-center justify-between gap-5'>
      <span className='text-sm font-medium'>{title}</span>
      <IoMdReturnRight />
    </div>
  )
}

export default Button
