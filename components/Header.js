import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export default function Header() {
  const [inputData, setInputData] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumberOfGuest] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleReset = () => {
    setInputData('');
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
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
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
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

      {inputData && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={['#FD5B61']}
          />
          <div className="flex border-b mb-2">
            <h2 className="grow font-bold">Number Of Guests</h2>
            <UsersIcon className="h-6" />
            <input
              value={numberOfGuest}
              type="number"
              className="w-12 outline-none px-2 text-red-400"
              onChange={(e) => setNumberOfGuest(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="grow text-gray-500" onClick={handleReset}>
              Cancel
            </button>
            <button className="grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
