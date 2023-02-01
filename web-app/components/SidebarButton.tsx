import React from 'react'

function SidebarButton({text}:{text:string}) {
  return (
    <div className='bg-gray-300 mb-4 mx-2 py-2 px-4 text-center rounded-lg'>
        {text}
    </div>
  )
}

export default SidebarButton