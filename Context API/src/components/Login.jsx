import React, { useContext, useState } from 'react'
// import UserInfoProvider from '../context/UserInfoProvider';
import UserInfo from '../context/UserInfo';

const Login = () => {

    const[userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const {setUser} = useContext(UserInfo);

    const submitHandler = (e) => {
        e.preventDefault()
        setUser({userName,password});
    }

    return (
        <div className='text-white flex flex-col gap-4 border border-white p-16 rounded-lg bg-gray-700/40'>    
            <div className='text-center font-bold'>Login Here</div>
            <input
            value={userName}
            placeholder='UserName'
            onChange={(e)=> setUserName(e.target.value)}
            className='text-black'
            />
            <input
            value={password}
            placeholder='Password'
            onChange={(e)=> setPassword(e.target.value)}
            className='text-black'
            />
            <button onClick={submitHandler} className='border border-white hover:bg-gray-700/40'>Submit</button>
        </div>
    )
}

export default Login