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
              <img src="https://user-images.githubusercontent.com/310223/150098621-c5b41b36-ff7d-4a56-86e7-b7f130e845a0.png" alt="logo" className='h-20' />
            </Link>
            {!isLandingPage && <ConnectButton/>}
        </div>
    </div>
  )
}

export default NavBar