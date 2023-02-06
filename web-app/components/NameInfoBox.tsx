import { truncateAddress } from '@/helpers';
import { INameInfoBoxProps } from '@/lib/types';
import React from 'react';

function NameInfoBox({ data }: INameInfoBoxProps) {
  const truncatedOwner = truncateAddress(data.owner, 10, 25);
  const truncatedController = truncateAddress(data.owner, 10, 25);

  return (
    <div className="h-full w-3/4 lg:w-1/2 mb-4 p-2 flex bg-fadedColor rounded-lg">
      <div className="flex w-1/2 p-2 flex-col">
        <p className="h-12 flex items-center justify-center bg-mainColor text-xl font-bold rounded-lg mb-4">
          {data.name}.fil
        </p>
        <label>Owner</label>
        <input
          type="text"
          defaultValue={truncatedOwner}
          className="h-8 mb-2 text-xs rounded-lg border-none outline-none text-mainColor pl-2"
        />
        <label>Second Conroller</label>
        <input
          type="text"
          defaultValue={truncatedController}
          className="h-8 mb-2 text-xs rounded-lg border-none outline-none text-mainColor pl-2"
        />
        <div className="h-12 flex items-center justify-center mt-4 w-full">
          <button className="w-[12rem] h-8 bg-slate-400 rounded-lg hover:scale-105">Update</button>
        </div>
      </div>
      <div className="w-1/2 bg-slate-400">
        <img src="" alt="" className="h-full w-full rounded-lg" />
      </div>
    </div>
  );
}

export default NameInfoBox;
