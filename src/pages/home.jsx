import React from 'react'


const Home = () => {
  return (
    <div className='relative w-full h-[100vh] parda'>
      <div className='absolute z-[2] w-full h-[100vh] flex flex-col justify-center gap-3 items-center'>
        <h1 className='font-bold lg:text-[40px] md:text-[30px] text-[25px] text-center text-[white]'>Eng yuqori sifatli ta'lim</h1>
        <p className='w-[80%] text-center md:w-[60%] text-[14px] md:text-[18px] text-[white]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla alias illo error doloribus quos, assumenda voluptatem qui ipsam aperiam.</p>
        <div>
          <a href="/" className='capitalize text-[14px] md:text-[16px] px-5 py-2 md:px-7 md:py-3 bg-[#0a2050] text-[white] rounded-lg hover:bg-[#f3f3f3] hover:text-[#0a2050] transition-[1s]'>Learn more</a>
          <a href="/" className='capitalize text-[14px] md:text-[16px] px-5 py-2 md:px-7 md:py-3 bg-[orange] text-[white] rounded-lg hover:bg-[#f3f3f3] hover:text-[#0a2050] transition-[1s]'>Visit courses</a>
        </div>
      </div>
    </div>
  )
}

export default Home
