import { ISidebarButtonProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function SidebarButton({ text, icon, path }: ISidebarButtonProps) {
  const matchingPath = useRouter().pathname == path;

  return (
    <Link
      href={path}
      className={`${
        matchingPath ? 'bg-slate-600 border-2 border-white' : 'bg-mainColor border-mainColor'
      } flex items-center justify-center mb-4 mx-2 py-2 px-4 text-center rounded-lg cursor-pointer`}
    >
      <span className="mr-4">{text}</span>
      <Image src={`/icons/${icon}.svg`} height={20} width={20} alt="icon" />
    </Link>
  );
}

export default SidebarButton;
