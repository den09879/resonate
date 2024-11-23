import React, { useEffect, useState } from 'react'
import { profile, mail, phone, at, net } from '../assets'
import Profile from './Profile';
import Fade from './Fade';
import Reveal from './Reveal';

const Contact = () => {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(1);
  const [userInfo, setUserInfo] = useState([])

  let hide = document.getElementById("hideScreen")

 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUserInfo(data)
    })
  }, [])
  
  const userProfile = (id) => {
    setCurrentUser(id-1)
    setShow(true)
    hide.style.display = "block";
  } 

  const exitProfile = () => {
    setShow(false)
    hide.style.display = "none";
  } 
  return (
    <>
      <div className="w-auto px-4 border rounded-lg shadow-sm border-gray-700 sm:px-6 py-2 bg-gray-800"> 
      <div id="hideScreen" onClick={() => exitProfile()}/>

        <div className='fixed w-fit h-fit mx-auto my-24 top-0 bottom-0 left-0 right-0 block z-10 backdrop-blur-sm'>
          {show && userInfo.map ( user => {
            if (currentUser == user.id-1) {
              return (<Profile id="profile" currentUser={currentUser} userInfo={userInfo}/>)
            }
          })}
        </div>
        <ul className="divide-y divide-gray-700">
          {
            userInfo.map ( user => {
              return (
                <Fade key={user.id}>
                <li className="py-3">
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img src={profile} className='w-12 whitefilter cursor-pointer' onClick={() => userProfile(user.id)}></img>
                    </div>
                    <div className='flex-1 truncate text-gray-400'>
                      <Reveal>
                      <p className="text-white text-lg">
                        {user.name}
                      </p>
                      </Reveal>
                      <Reveal>
                      <div className='flex'>
                        <div className='align-middle'>
                          <img src={at} className='w-6 whitefilter'></img>
                          <img src={mail} className='w-6 whitefilter'></img>
                          <img src={phone} className='w-6 whitefilter'></img>
                        </div>
                        <div className='ml-1'>
                          {user.username}
                          <br />
                          <a href={'mailto:'+user.email}>
                            {user.email}
                          </a>
                          <br />
                          <a href={'tel:'+user.phone}>
                            {user.phone}
                          </a>
                        </div>
                      </div>
                      </Reveal>
                    </div>
                    <div className='inline-flex items-center text-white cursor-pointer' onClick={() => userProfile(user.id)}>
                      ...
                    </div>
                  </div>
                </li>
                </Fade>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Contact