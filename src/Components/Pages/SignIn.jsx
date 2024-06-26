import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

function SignIn() {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[error,setError] = useState('')
    const {user, signIn} = useAuth()
    const navigate  = useNavigate()

    const handleSubmit = async (e)=>{
        setError('')
        e.preventDefault()
        try{
            await signIn(email,password)
            navigate('/')
        }catch(error){
            console.log(error);
            setError(error.message)
        }
    }


  return (
    <>
            <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />        
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[550px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error ? <p className='p-3 text-red-700 text-md my-2'>{error}</p> : null}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                        <input onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='m-2' type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                            <p className='py-8'><span className='text-gray-600'>Don't Have An Account ?</span>
                             <Link to='/signup'>
                             Sign Up
                             </Link>
                             </p>
                    </form>
                </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default SignIn
