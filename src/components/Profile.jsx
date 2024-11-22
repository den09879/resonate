import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { marker } from '../assets';
import Reveal from './Reveal';
import Fade from './Fade';

const Profile = ({ currentUser, userInfo }) => {
  var id = currentUser;
  var cood = userInfo[id].address.geo
  console.log(cood)
  const defaultProps = {
    center: {
      lat: parseInt(cood.lat),
      lng: parseInt(cood.lng)
    },
    zoom: 0
  };
  
  return (
    <Fade>
      <div className='border-2 rounded-lg shadow-sm border-gray-700 sm:p-6 bg-gray-900 truncate text-[#717983]'>
      <div id="hideScreen"></div>
      <div className='sm:flex relative'>
        <div className='sm:w-fit sm:p-6 p-4 relative'>
          <Reveal>
          <p className="text-white text-lg">
            {userInfo[id].name}
          </p>
          </Reveal>
          <Reveal>
          @{userInfo[id].username}
          <br />
          
          {userInfo[id].email}
          <br />
          {userInfo[id].phone}
          </Reveal>
        </div>
        <div className='sm:w-fit sm:p-6 p-4 relative'>
          <Reveal>
          <p className="text-white text-lg">
            Business Details
          </p>
          </Reveal>
          <Reveal>
          {userInfo[id].company.name}
          <br />
          <p className='italic'>
            "{userInfo[id].company.catchPhrase}"
          </p>
          Service - {userInfo[id].company.bs.charAt(0).toUpperCase() + userInfo[id].company.bs.slice(1)}
          <br />
          {userInfo[id].website}
          </Reveal>
        </div>
        
      </div>
      <div className='sm:p-6 p-4 '>
      <Reveal>
        <p className="text-white text-lg">
          Address
        </p>
        </Reveal>
          <Reveal>
        {userInfo[id].address.suite}, {userInfo[id].address.street} 
        <br />
        {userInfo[id].address.city}, {userInfo[id].address.zipcode}
        </Reveal> 
        <Fade>
        <div className='sm:h-96 h-60 w-full'>
          <GoogleMapReact className=''
            bootstrapURLKeys={{ key: "AIzaSyBLndOqwKvIa9XgCMLtq2UKVVdj2Jf8Vc8" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            
          >
            <img src={marker} className='w-12'></img>
          </GoogleMapReact>
        </div>
        </Fade>
      </div>
    </div>
    </Fade>
    
  )
}

export default Profile