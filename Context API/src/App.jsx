import { useState } from 'react'
import UserInfoProvider from './context/UserInfoProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <div className='h-screen w-full flex flex-col justify-center items-center bg-black'>
        <UserInfoProvider className='w-[50%] '>
            <Login/>
            <Profile/>
        </UserInfoProvider>
      </div>
    </>
  )
}

export default App
