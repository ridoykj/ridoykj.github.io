import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import photo from '../assets/photo/ridoy.png';

function IntroRC() {
    return (
        <>
            <div className='flex flex-col p-4 md:p-8 gap-14'>

                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-3xl md:text-4xl text-indigo-900">I am Ridoy</span>
                        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">FullStack <br />Java Developer</h1>
                        <p className="text-xl text-gray-600 font-light">As a Java Developer, I deconstruct intricate technical challenges to craft robust solutions with a focus on integrity, ensuring seamless connectivity for millions of users.</p>

                        <div className="flex flex-row w-full text-violet-500 gap-5">
                            <a href="#" className="px-6 md:px-10 py-4 rounded-3xl border-violet-500 border inline-flex gap-3 transition duration-300 hover:bg-violet-500 hover:text-white">Download CV<FiDownload /></a>
                            <ul className="flex flex-row gap-3 md:gap-5 items-center">
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href="https://github.com/ridoykj"><FaGithub /></a></li>
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href="https://www.linkedin.com/in/ridoy-kumar-joy/"><FaLinkedinIn /></a></li>
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href="https://twitter.com/ridoykj"><FaTwitter /></a></li>
                                <li className='rounded-full border-violet-500 border p-2 transition duration-200 hover:bg-violet-500 hover:text-white'><a href='mailto:ridoykj@gmail.com'><FaEnvelope /></a></li>
                            </ul>
                            {/* <span className="absolute flex size-14 md:size-3 items-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 text-7xl md:text-[12rem] text-violet-200/20">Hello</span>
                                <span className="relative inline-flex rounded-full text-7xl md:text-[12rem] text-violet-200/30">Hello</span>
                            </span> */}
                        </div>
                    </div>

                    <div className="grow mt-16 md:mt-0">
                        <img src={photo} className='max-w-sm rounded-3xl rotate-6 transition duration-500 hover:rotate-0 hover:ring-2 ring-indigo-600' alt="not found" />
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 text-violet-500 text-left">
                    <div className="flex flex-col md:flex-row gap-2">
                        <h1 className='font-bold text-5xl md:text-6xl'>6+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <h1 className='font-bold text-5xl md:text-6xl'>32+</h1>
                        <p>Project Completed</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <h1 className='font-bold text-5xl md:text-6xl'>550+</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <h1 className='font-bold text-5xl md:text-6xl'>43K+</h1>
                        <p>Happy Active Users</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroRC