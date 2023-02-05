import React from 'react'

function NameInfoBox() {
  return (
    <div className='h-3/4 w-3/4 lg:w-1/2 flex bg-fadedColor rounded-lg'>
        <div className='flex flex-col'>
            <p>Merkim.fil</p>
            <label>Owner</label>
            <input type="text"/>
            <label>Second Conroller</label>
            <input type="text"/>
            <label>Validity</label>
            <input type="text"/>
        </div>
        <div>
            <img src="" alt="" className='h-full w-[50%] bg-gray-200' />
        </div>
    </div>
  )
}

export default NameInfoBox