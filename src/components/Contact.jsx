import React, { useEffect, useState } from 'react'
import { profile } from '../assets'
import Profile from './Profile';

const Contact = () => {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(1);
  const [userInfo, setUserInfo] = useState([])

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
  } 

  return (
    <>
      
      

      <div className="w-auto p-4 border rounded-lg shadow-sm border-gray-700 sm:p-6 bg-gray-800"> 
        <div className='fixed w-fit h-fit mx-auto my-24 top-0 bottom-0 left-0 right-0 block z-10'>
          {show && <Profile currentUser={currentUser} userInfo={userInfo}/>}
        </div>
        <ul className="divide-y divide-gray-700 text-gray-400">
          {
            userInfo.map ( user => {
              return (
                <li className="py-3" key={user.id}>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img src={profile} className='w-12 whitefilter cursor-pointer' onClick={() => userProfile(user.id)}></img>
                    </div>
                    <div className='flex-1 truncate text-[#717983]'>
                      <p className="text-white text-lg">
                        {user.name}
                      </p>
                      @{user.username} 
                      <br />
                      {user.email}
                      <br />
                    </div>
                    <div className='inline-flex items-center text-white cursor-pointer' onClick={() => userProfile(user.id)}>
                      ...
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Contact