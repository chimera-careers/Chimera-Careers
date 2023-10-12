import React from 'react'
import Icon from "../../assets/icon.svg"

function RegisterForm() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src={Icon} alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-900">Sign in to your account</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        {/* Input for Full name */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Full Name <span className='text-red-700'>*</span></label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        {/* Input for email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address <span className='text-red-700'>*</span></label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        {/* Input for Whatsapp Number */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Whatsapp Number <span className='text-red-700'>*</span></label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>


  
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium  leading-6 text-gray-900">Password <span className='text-red-700'>*</span></label>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        </div>
      </form>
  
     
    </div>
  </div>
  )
}

export default RegisterForm
