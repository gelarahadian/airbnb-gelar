import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';
import { MapPinIcon } from '@heroicons/react/20/solid';

export default function MapScreen({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log(selectedLocation);

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/gelarahadian/cldwqiqwo001201p3uw21z4a1"
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedLocation(result);
            }}
            latitude={result.lat}
            longitude={result.long}
          >
            <MapPinIcon className="h-6 text-white cursor-pointer animate-bounce" />
          </Marker>

          {selectedLocation?.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}
