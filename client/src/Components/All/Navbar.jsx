import React from 'react'
import Logo from "../../assets/Logo.svg"

function Navbar() {
  return (
    <div className="w-full  flex items-center justify-around sticky ">
<div className="logo">

      <a href="/"><img src={Logo} alt="" className='w-32 h-20 ml-10'/></a>
</div>

<div className="flex items-center gap-10">
  <a href="" className=''>Home</a>
  <a href="" className=''>New Jobs</a>
  <a href="" className=''>categories</a>
  <a href="" className=''>Placements</a>
  <a href="" className=''>Reviews</a>
</div>
<div className="flex gap-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

  <input type="text" className='border-b focus:border-transparent focus:outline-none border-stone-400' placeholder='Find Jobs'/>
</div>

<div className="flex gap-2 items-center">
  <button>Signin</button>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

</div>
    </div>
  
  )
}

export default Navbar
