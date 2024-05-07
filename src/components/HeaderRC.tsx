import React from 'react'

function HeaderRC() {
  return (
    <div className='flex flex-row items-center w-full gap-6 p-2'>
      <div className=''>
        <img src='src/assets/icons/code2.png' alt="not found" className='rounded-full size-14' />
      </div>
      <a href='mailto:ridoykj@gmail.com' className='font-medium text-indigo-900 hover:text-indigo-500 grow'>ridoykj@gmail.com</a>
      <div className='font-medium text-indigo-900'>
        <ul className='flex flex-row gap-6 items-center'>
          <li className='hover:border-b-2 transition duration-300 hover:border-indigo-700'>Service</li>
          <li className='hover:border-b-2 transition duration-300 hover:border-indigo-700'>Works</li>
          <li className='hover:border-b-2 transition duration-300 hover:border-indigo-700'>Resume</li>
          <li className='hover:border-b-2 transition duration-300 hover:border-indigo-700'>Skills</li>
          <li className='hover:border-b-2 transition duration-300 hover:border-indigo-700'>Testimonials</li>
          <li className='hover:border-b-2 transition duration-300 hover:border-indigo-700'>Contact</li>
        </ul>
      </div>
      <div>
        <button type="button" className='rounded-full text-white font-medium px-4 py-2 bg-gradient-to-r from-violet-500  to-indigo-900 to-85% transition duration-1000 hover:from-indigo-900  hover:to-violet-500'> Hire Me!</button>
      </div>
    </div>
  )
}

export default HeaderRC