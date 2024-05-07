import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FaBaseball } from 'react-icons/fa6'
import { FiDownload } from 'react-icons/fi'

function IntroRC() {
    return (
        <>
            <div className='flex flex-col p-8 gap-14'>
                <div className='flex flex-row'>
                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-4xl text-indigo-900">I am Ridoy</span>
                        <h1 className="font-bold text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">Java <br />FullStack Developer</h1>
                        <p className="text-xl text-gray-600 font-light">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                        <div className="flex flex-row w-full text-violet-500 gap-5">
                            <a href="#" className="px-10 py-4 rounded-3xl border-violet-500 border inline-flex gap-3 transition duration-300 hover:bg-violet-500 hover:text-white">Download CV<FiDownload /></a>
                            <ul className="flex flex-row gap-5 items-center">
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href="#"><FaTwitter /></a></li>
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href="#"><FaBaseball /></a></li>
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href="#"><FaLinkedinIn /></a></li>
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href="#"><FaGithub /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grow">
                        <img src="src\assets\photo\ridoy.png" className='max-w-sm rounded-3xl rotate-6 transition duration-500 hover:rotate-0 hover:ring-2 ring-indigo-600' alt="d" />
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 text-violet-500">
                    <div className="inline-flex gap-2 items-center">
                        <h1 className='font-bold text-6xl'>6</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="inline-flex gap-2 items-center">
                        <h1 className='font-bold text-6xl'>50+</h1>
                        <p>Project Completed</p>
                    </div>
                    <div className="inline-flex gap-2 items-center">
                        <h1 className='font-bold text-6xl'>1.5K</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div className="inline-flex gap-2 items-center">
                        <h1 className='font-bold text-6xl'>6</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroRC