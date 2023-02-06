import { IHomeActionButtonProps } from '@/lib/types';
import Link from 'next/link';
import React from 'react';

function HomeActionButton({ hideArrow }: IHomeActionButtonProps) {
  return (
    <div className="flex flex-col justify-center items-center h-32">
      {!hideArrow && (
        <img src="/icons/arrowsDown.svg" alt="" className="h-10 w-10 p-2 bg-btnColor mb-2 rounded-[50%]" />
      )}
      <Link
        href={'/home'}
        className="w-[200px] text-center text-lg sm:text-xl font-title px-3 py-2 bg-btnColor hover:bg-white hover:text-mainColor rounded-2xl"
      >
        Grab a name
      </Link>
    </div>
  );
}

export default HomeActionButton;
