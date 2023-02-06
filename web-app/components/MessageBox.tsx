import React from 'react';

function MessageBox({ message }: { message: string }) {
  return (
    <div className="w-full flex items-center justify-center mx-2 text-black">
      <div className="bg-red-100 px-4 py-2 rounded-lg">{message}</div>
    </div>
  );
}

export default MessageBox;
