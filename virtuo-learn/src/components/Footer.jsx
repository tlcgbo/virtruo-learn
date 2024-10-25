import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between'>

          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-semibold text-blue-700'>Virtuo Learn</h2>
            <p className='text-gray-400 mt-2 max-w-md'>
              Simplifying the process of birth registration with care and precision.
            </p>
          </div>

          <div className=''>
            <h3 className='text-xl font-semibold mb-2'>Contact Us</h3>
            <p className='text-gray-400'>Email: random@gmail.com</p>
          </div>
        </div>

        <hr className='border-gray-700 my-6' />

        <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
          <p>@ 2024 Virtuo Learn. All rights reserved.</p>
          <div className='mt-4 md:mt-0'>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>Privacy Policy</a>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer