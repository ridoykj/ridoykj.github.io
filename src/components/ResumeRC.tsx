import { FaGraduationCap } from 'react-icons/fa6'
import { RiLightbulbFlashLine } from 'react-icons/ri'

function ResumeRC() {
    return (
        <div className='bg-violet-50 p-16 flex flex-col items-center'>
            <div className='flex flex-row gap-16'>
                <div className="section-header text-center">
                    <div className='inline-flex font-bold text-5xl gap-3 pb-8'>
                        <RiLightbulbFlashLine className='text-violet-500' />
                        <h2 className="bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Experience</h2>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='group flex flex-col transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white text-left gap-4 rounded-2xl bg-white'>
                            <span className="text-2xl text-violet-500 group-hover:text-white font-semibold col-span-1">01</span>
                            <h3 className="text-3xl font-semibold col-span-4">Branding Design</h3>
                            <span className="col-span-6 text-black group-hover:text-white">I break down complex user experin</span>
                        </div>
                        <div className='group flex flex-col transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white text-left gap-4 rounded-2xl bg-white'>
                            <span className="text-2xl text-violet-500 group-hover:text-white font-semibold col-span-1">01</span>
                            <h3 className="text-3xl font-semibold col-span-4">Branding Design</h3>
                            <span className="col-span-6 text-black group-hover:text-white">I break down complex user experin</span>
                        </div>
                        <div className='group flex flex-col transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white text-left gap-4 rounded-2xl bg-white'>
                            <span className="text-2xl text-violet-500 group-hover:text-white font-semibold col-span-1">01</span>
                            <h3 className="text-3xl font-semibold col-span-4">Branding Design</h3>
                            <span className="col-span-6 text-black group-hover:text-white">I break down complex user experin</span>
                        </div>
                    </div>
                </div>
                <div className="section-header text-center">
                    <div className='inline-flex font-bold text-5xl gap-3 pb-8'>
                        <FaGraduationCap className='text-violet-500' />
                        <h2 className="bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Education</h2>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='group flex flex-col transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white text-left gap-4 rounded-2xl bg-white'>
                            <span className="text-2xl text-violet-500 group-hover:text-white font-semibold col-span-1">01</span>
                            <h3 className="text-3xl font-semibold col-span-4">Branding Design</h3>
                            <span className="col-span-6 text-black group-hover:text-white">I break down complex user experin</span>
                        </div>
                        <div className='group flex flex-col transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white text-left gap-4 rounded-2xl bg-white'>
                            <span className="text-2xl text-violet-500 group-hover:text-white font-semibold col-span-1">01</span>
                            <h3 className="text-3xl font-semibold col-span-4">Branding Design</h3>
                            <span className="col-span-6 text-black group-hover:text-white">I break down complex user experin</span>
                        </div>
                        <div className='group flex flex-col transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white text-left gap-4 rounded-2xl bg-white'>
                            <span className="text-2xl text-violet-500 group-hover:text-white font-semibold col-span-1">01</span>
                            <h3 className="text-3xl font-semibold col-span-4">Branding Design</h3>
                            <span className="col-span-6 text-black group-hover:text-white">I break down complex user experin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeRC