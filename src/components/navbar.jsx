import React, { useState } from 'react'
import Logo from '../assets/qmii-logo.png'
import { MdOutlineCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className='containerr fixed h-[80px] md:h-[100px] w-full flex justify-between items-center bg-[white]'>
      {/* Logo  */}
      <div className='w-[150px] md:w-[200px] cursor-pointer'>
        <img src={Logo} alt="Logo" className='w-full' />
      </div>

      {/* navbar-items  */}
      <div className={`text-[#0a2050] md:block md:static md:w-full absolute top-[80px] w-[50%] ${toggle ? 'left-0 backdrop-blur' : 'left-[-100%]'} transition `}>
       <nav>
        <ul className='flex md:flex-row md:justify-end flex-col gap-10 md:text-[18px] lg:text-[22px] cursor-pointer '>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#home">Home</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#about">About</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#blog">Blog</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#courses">Courses</a></li>
          <li className='text-xl font-bold text-blue-950 hover:text-yellow-500'><a href="#contact">Contact</a></li>
        </ul>
       </nav>
      </div>
      <div className='md:hidden block- text-[25px]' onClick={()=>setToggle(!toggle)}>
        {toggle ? <span><MdOutlineCancel /></span> : <span><FaBars /></span>}
      </div>
    </div>
  )
}

export default Navbar
