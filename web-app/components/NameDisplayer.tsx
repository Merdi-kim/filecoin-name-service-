import React from 'react'
import { IModalProps } from '@/lib/types'

function NameDisplayer({setModal}: IModalProps) {
  return (
    <div className='relative h-16 w-5/6 sm:w-4/6 lg:w-2/6'>
        <div className="w-full h-full flex justify-between items-center px-4 py-2 rounded-md bg-slate-200">
            <span>merkim.fil</span>
            <span> 4 FIL</span>
        </div>
        <div className='absolute w-full h-8 top-[5rem] text-center'>
          <button className='h-full w-[8rem] bg-slate-400 rounded-lg cursor-pointer' onClick={() => setModal(true)}>Purchase</button>
        </div>
    </div>
  )
}

export default NameDisplayer