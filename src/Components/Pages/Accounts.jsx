import React from 'react'
import SavedShows from '../SavedShows'

function Accounts() {
  return (
    <>
     <div className='w-full text-white'>
     <img className=' w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />        
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
        </div>
        </div>
        <SavedShows/>
    </>
  )
}

export default Accounts
