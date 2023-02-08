import Image from 'next/image';
import React from 'react';

export default function SmallCard({ location, img, distance }) {
  return (
    <div
      className="flex items-center space-x-4 hover:bg-gray-100 hover:scale-105
     transition duration-200 ease-out"
    >
      <div className="relative w-16 h-16 m-2">
        <Image src={img} fill className="rounded-xl" />
      </div>
      <div>
        <p>{location}</p>
        <p className=" text-gray-500">{distance}</p>
      </div>
    </div>
  );
}
