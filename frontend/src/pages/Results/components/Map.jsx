import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";
import { useMapEvent } from "react-leaflet";

export default function Map({ coord, places }) {  

    return (
    <MapContainer
      center={coord}
      zoom={15}
      scrollWheelZoom={true}
      style={{ minHeight: "50vh", minWidth: "100%" }}
      className="rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coord}></Marker>
      { places ? places.map((place, idx) => (
        <Marker key={idx} position={[place.geometry.location.lat(), place.geometry.location.lng()]}>
          <Popup>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{place.name}</h1>
              <p className="text-sm">{place.vicinity}</p>
            </div>
          </Popup>
        </Marker>
      )) : null }

    </MapContainer>
  );
}
