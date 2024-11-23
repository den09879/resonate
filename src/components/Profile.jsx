import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { marker, phone, mail, at, net } from '../assets';
import Reveal from './Reveal';
import Fade from './Fade';

const Profile = ({ currentUser, userInfo }) => {
  var id = currentUser;
  var cood = userInfo[id].address.geo

  const defaultProps = {
    center: {
      lat: parseInt(cood.lat),
      lng: parseInt(cood.lng)
    },
    zoom: 1
  };
  
  function NewTab(site) {
    window.open(
        "https://"+site, "_blank");
  }
  return (
    <Fade>
      <div className='border-2 rounded-lg shadow-sm border-gray-700 sm:p-6 bg-gray-900 truncate text-gray-400 py-2'>
      <div id="hideScreen"></div>
      <div className='sm:flex relative'>
        <div className='sm:w-fit sm:px-6 px-4 relative'>
          <Reveal>
          <p className="text-white text-lg">
            {userInfo[id].name}
          </p>
          </Reveal>
          <Reveal>
          <div className='flex'>
            <div className='align-middle'>
              <img src={at} className='w-6 whitefilter'></img>
              <img src={mail} className='w-6 whitefilter'></img>
              <img src={phone} className='w-6 whitefilter'></img>
              <img src={net} className='w-6 whitefilter p-[2px]'></img>
            </div>
            <div className='ml-1'>
              {userInfo[id].username}
              <br />
              <a href={'mailto:'+userInfo[id].email}>
                {userInfo[id].email}
              </a>
              <br />
              <a href={'tel:'+userInfo[id].phone}>
                {userInfo[id].phone}
              </a>
              <br />
              <a onClick={() => NewTab(userInfo[id].website)} className='cursor-pointer'>
                {userInfo[id].website}
              </a>
            </div>
          </div>
          
          </Reveal>
        </div>
        <div className='sm:w-fit sm:px-6 px-4 relative sm:pt-0 pt-2'>
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
          
          </Reveal>
        </div>
        
      </div>
      <div className='sm:px-6 px-4 py-2'>
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
        <div className='sm:h-96 h-60 w-full border-4 rounded-sm shadow-sm border-white'>
          <GoogleMapReact 
            bootstrapURLKeys={{ key: "AIzaSyBLndOqwKvIa9XgCMLtq2UKVVdj2Jf8Vc8" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            
          >
            <img src={marker} className='w-10' lat={defaultProps.center.lat} lng={defaultProps.center.lng}></img>
          </GoogleMapReact>
        </div>
        </Fade>
      </div>
    </div>
    </Fade>
    
  )
}

export default Profile