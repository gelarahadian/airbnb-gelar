import Image from 'next/image';
import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <div
      className="flex py-7 px-3 border-b hover:shadow-lg hover:opacity-80
     transition duration-200 ease-out first:border-t"
    >
      <div className="relative w-40 h-24 md:w-80 md:h-52 flex-shrink-0">
        <Image src={img} fill className="object-cover rounded-xl" />
      </div>
      <div className="flex-grow flex flex-col pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="w-5 h-5 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="text-xs text-gray-500 grow pt-2">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-red-400" />
            <p>{star}</p>
          </div>
          <div>
            <p className="font-semibold text-lg lg:text-2xl pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
