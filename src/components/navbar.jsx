import React from 'react'
import Logo from '../assets/qmii-logo.png'

const Navbar = () => {
  return (
    <div className='h-24 flex justify-between items-center px-16 bg-slate-300'>
      <div className='flex w-32 h-16'>
        <img src={Logo} alt="Logo" /></div>
      <div>
        <ul className='flex gap-5 cursor-pointer '>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#home">Home</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#about">About</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#blog">Blog</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#courses">Courses</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar
