import React, { useState } from 'react'
import { APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

const Profile = ({ currentUser, userInfo }) => {
  var id = currentUser;
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });
  return (
    <div className='border-2 rounded-lg shadow-sm border-gray-700 sm:p-6 bg-gray-900 truncate text-[#717983]'>
      <div className='sm:flex relative'>
        <div className='sm:w-fit sm:p-6 p-4 relative'>
          <p className="text-white text-lg">
            {userInfo[id].name}
          </p>
          @{userInfo[id].username}
          <br />
          {userInfo[id].email}
          <br />
          {userInfo[id].phone}
        </div>
        <div className='sm:w-fit sm:p-6 p-4 relative'>
          <p className="text-white text-lg">
            Business Details
          </p>
          {userInfo[id].company.name}
          <br />
          <p className='italic'>
            "{userInfo[id].company.catchPhrase}"
          </p>
          Service - {userInfo[id].company.bs.charAt(0).toUpperCase() + userInfo[id].company.bs.slice(1)}
        </div>
        
      </div>
      <div className='sm:p-6 p-4 '>
        <p className="text-white text-lg">
          Address
          
          
        </p>
        <APIProvider apiKey='AIzaSyBLndOqwKvIa9XgCMLtq2UKVVdj2Jf8Vc8'>
            <Map
              style={{ borderRadius: "20px" }}
              defaultZoom={13}
              defaultCenter={markerLocation}
              gestureHandling={"greedy"}
              disableDefaultUI
            >
              
            </Map>
          </APIProvider>
      </div>
    </div>
  )
}

export default Profile