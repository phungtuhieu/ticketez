import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import { listIcon } from "~/assets/img";

// export const maps = {popupInfo}
function MapboxCcx({ onPopupInfoChange, latitude, longitude, address }) {
  const [popupInfo, setPopupInfo] = useState({
    latitude: 10.768928753876907,
    longitude: 106.65765392148774, address: ""
  });

  // console.log(latitude);
  // console.log(longitude);

  useEffect(() => {

    setPopupInfo({
      latitude: latitude,
      longitude: longitude,
      address: address
    })

  }, [ latitude, longitude, address])

  console.log(popupInfo);

  const mapboxAccessToken = "pk.eyJ1Ijoibmd1eWVudmFuaHV1dGFpIiwiYSI6ImNsbnU0N29jazBiemwyaW9kbGZyZnAxZjkifQ.C0_aqS6mFyHpXwUBBSLzqA";
  //  console.log(popupInfo);

  useEffect(() => {
    setPopupInfo({ latitude: latitude, longitude: longitude, address: address })
  }, [latitude, longitude, address]);
  const handleMapClick = async (event) => {
    const clickedLongitude = event.lngLat.lng;
    const clickedLatitude = event.lngLat.lat;

    // console.log('Clicked Latitude:', clickedLatitude);
    // console.log('Clicked Longitude:', clickedLongitude);

    // Kiểm tra xem latitude và longitude là số hợp lệ và không phải là NaN
    if (Number.isFinite(clickedLatitude) && !isNaN(clickedLatitude) &&
      Number.isFinite(clickedLongitude) && !isNaN(clickedLongitude)) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${clickedLongitude},${clickedLatitude}.json?access_token=${mapboxAccessToken}`
        );
        // console.log(response);

        const placeInfo = response.data.features[0];
        // console.log(response.data.features[0].place_name);
        // Hiển thị Popup cho điểm mới được  click
        setPopupInfo({
          latitude: clickedLatitude,
          longitude: clickedLongitude,
          address: placeInfo.place_name,
        });
        onPopupInfoChange({
          latitude: clickedLatitude,
          longitude: clickedLongitude,
          address: placeInfo.place_name,
        });

      } catch (error) {
        console.error('Error fetching place information:', error);
      }
    } else {
      console.error('Invalid latitude or longitude.');
    }
  };


  return (
    <Map
      onClick={handleMapClick}
      latitude={popupInfo.latitude}
      longitude={popupInfo.longitude}
      initialViewState={{
        // latitude: popupInfo.latitude,
        // longitude: popupInfo.longitude,
        zoom: 12,
      }}
      style={{
        width: "40vw",
        height: "40vh",
        position: 'relative'
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapboxAccessToken}
    >
      <Marker
        latitude={popupInfo.latitude}
        longitude={popupInfo.longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img
          width={15}
          src={listIcon.markerPink}
          alt=""
        />
      </Marker>


    </Map>
  );
}

export default MapboxCcx;