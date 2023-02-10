import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Map from '@/components/Map';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react';
import InfoCard from '../components/InfoCard';

export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuest}`} />
      <main className="flex">
        <section className="grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {numberOfGuest} Guests
          </p>
          <h2 className="text-3xl font-semibold mt-2 pb-6">
            Stays in {location}
          </h2>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <button className="button">Cancelation Flexibility</button>
            <button className="button">Time Of Place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Bads</button>
            <button className="button">More Filter</button>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
