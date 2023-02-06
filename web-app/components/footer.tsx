import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className="w-full px-8 sm:px-14 pb-8  text-white">
      <div className="inline-block">
        <Image src="/illustrations/smile.png" height={400} width={100} alt="" className="h-24" />
      </div>
      <div className="w-full sm:w-5/6 inline-block text-right">
        <ul className="inline-block">
          <li className="inline-block mr-4">About </li>
          <li className="inline-block mr-4">Carreers</li>
          <li className="inline-block mr-4">Governance </li>
          <li className="inline-block mr-4">FAQ</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
