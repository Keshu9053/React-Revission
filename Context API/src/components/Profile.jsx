import React, { useContext } from 'react'
// import UserInfoProvider from '../context/UserInfoProvider'
import UserInfo from '../context/UserInfo';



const Profile = () => {
    const {user} = useContext(UserInfo);

    if(!user) return <div className='text-white'>Please Login</div> 
    return <div className='text-white'>Welcome Bhai     : {user.userName}</div>
}

export default Profile