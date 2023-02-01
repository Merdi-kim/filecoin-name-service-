import { ISidebarButtonProps } from '@/lib/types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


function SidebarButton({text, icon, path}: ISidebarButtonProps) {

  const matchingPath = useRouter().pathname == path

  return (
    <Link href={path} className={`${ matchingPath ? 'bg-slate-600' : 'bg-gray-300' } flex items-center justify-center mb-4 mx-2 py-2 px-4 text-center rounded-lg cursor-pointer`}>
      <span className='mr-4'>{text}</span>
      <img src={`/icons/${icon}.svg`} alt="icon"/>
    </Link>
  )
}

export default SidebarButton