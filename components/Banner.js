import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        className="object-cover"
        src={'https://links.papareact.com/0fm'}
        fill
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm md:text-lg">Not Sure Where To go? perfect</p>
        <button
          className="py-4 px-10 rounded-full bg-white shadow-md text-purple-500 my-3 font-bold
        hover:shadow-lg active:scale-90 transition duration-150"
        >
          I'am Flexible
        </button>
      </div>
    </div>
  );
}
