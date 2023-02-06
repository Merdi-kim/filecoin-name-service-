import React from 'react'
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { INavBarProps } from '@/lib/types';

function NavBar({ isLandingPage }: INavBarProps) {

  const style = isLandingPage ? ' sm:hidden h-24 p-4 flex justify-center items-center' : 'h-24 p-4 flex justify-between items-center'

  return (
    <div>
        <div className={style}>
            <Link href={'/'}>
              <img src="https://user-images.githubusercontent.com/310223/150100369-3eb15e7c-aa57-4106-809e-6d8331fc2635.png" alt="logo" className='h-20' />
            </Link>
            {!isLandingPage && <ConnectButton/>}
        </div>
    </div>
  )
}

export default NavBar