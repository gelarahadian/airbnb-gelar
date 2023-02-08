import Image from 'next/image';
import React from 'react';

export default function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} fill />
      </div>
      <div className="absolute top-32 ml-16">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="bg-gray-900 px-4 py-2 rounded-md text-white mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
