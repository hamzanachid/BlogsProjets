import React from 'react'

function NavBar() {
  return (
    <div className='w-[100%] font-thin capitalize  h-[15%] flex items-center justify-between'>
        <h1 className='text-2xl text-blue-500'>hamza blogs</h1>
        <ul className='flex'>
            <li className='text-xl hover:text-blue-500 cursor-pointer'>Home</li>
            <li className='ml-10 text-xl hover:text-blue-500 cursor-pointer'>Add Blog</li>
            <li className='ml-10 text-xl hover:text-blue-500 cursor-pointer'>About</li>
        </ul>
    </div>
  )
}

export default NavBar