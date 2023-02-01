import React from 'react'

function Footer() {
  return (
      <div className='flex px-8 sm:px-14 pb-8 justify-between'>
        <div>
         <img src="illustrations/smile.png" alt="" className='h-24' />
        </div>
        <div>
          <ul>
            <li>About </li>
            <li>Carreers</li>
            <li>Governance </li>
            <li>FAQ</li>    
          </ul>
        </div>
      </div>
  )
}

export default Footer