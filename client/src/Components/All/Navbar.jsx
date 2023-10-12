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

<div className="button">
  <button>Signin</button>
</div>
    </div>
  
  )
}

export default Navbar
