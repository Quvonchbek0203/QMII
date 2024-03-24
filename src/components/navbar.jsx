import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
// logo 
import logo from "../assets/qmii-logo.png"



const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className='containerr z-[10] flex fixed justify-between items-center bg-[white] h-[100px] w-full p-10'>
      {/* Logo  */}
      <div className='w-[80px] md:w-[120px] cursor-pointer'>
        <img src={logo} alt="logo" className='w-full' />    
      </div>

      {/* nav-items  */}
      <div className={`text-[#0a2050] md:block lg: md:static md:w-full absolute top-[80px] w-[50%] ${toggle ? 'left-0 backdrop-blur ' : 'left-[-100%]'} transition-none`}>
        <nav>
          <ul className='flex md:flex-row md:justify-end flex-col gap-10 md:text-[18px] lg:text-[22px] font-bold'>
            <li className='hover:text-[#e0e05f]'><a href="#">Home</a></li>
            <li className='hover:text-[#e0e05f]'><a href="#">About</a></li>
            <li className='hover:text-[#e0e05f]'><a href="#">Blog</a></li>
            <li className='hover:text-[#e0e05f]'><a href="#">Courses</a></li>
            <li className='hover:text-[#e0e05f]'><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* bar icon  */}
      <div className='md:hidden block text-[25px]' onClick={()=>setToggle(!toggle)}>
        {toggle ? <span><MdOutlineCancel /></span> : <span><FaBars /></span>}
      </div>


    </div>
  )
}

export default Navbar
