import Image from 'next/image';
import React from 'react';

function ResultPlaceholder() {
  return (
    <div className="bg-fadedColor min-w-[350px] h-3/4 flex flex-col items-center justify-center rounded-lg">
      <p className="text-lg">Search results will appear here</p>
      <Image src="/icons/search-results.png" height={400} width={400} alt="" className="h-32 w-32 mt-6" />
    </div>
  );
}

export default ResultPlaceholder;
