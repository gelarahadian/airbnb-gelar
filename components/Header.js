import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="sticky top-0 grid grid-cols-3 shadow-md z-50 py-5 px-5">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer justify-start">
        <Link href={'/'}>
          <Image
            className="object-contain object-left"
            src={'https://links.papareact.com/qd3'}
            fill
          />
        </Link>
      </div>

      {/* middle */}
      <div className="flex md:border-2 rounded-full py-2">
        <input
          placeholder="Start your search"
          className="bg-transparent grow outline-none text-sm pl-5"
        />
        <MagnifyingGlassIcon className="hidden md:inline-block w-8 bg-red-500 rounded-full p-2 text-white md:mx-2 cursor-pointer" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline-block">Become a Host</p>
        <GlobeAltIcon className="w-6 cursor-pointer" />
        <div className="flex border-2 rounded-full p-2 space-x-2">
          <Bars3Icon className="w-6" />
          <UserCircleIcon className="w-6" />
        </div>
      </div>
    </header>
  );
}
