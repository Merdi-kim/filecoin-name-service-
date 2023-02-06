import React from 'react';

function ResultPlaceholder() {
  return (
    <div className="bg-fadedColor min-w-[350px] h-3/4 flex flex-col items-center justify-center rounded-lg">
      <p className="text-lg">Search results will appear here</p>
      <img src="/icons/search-results.png" alt="" className="h-32 w-32 mt-6" />
    </div>
  );
}

export default ResultPlaceholder;
