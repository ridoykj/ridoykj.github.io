import { GoArrowDownRight } from 'react-icons/go'

function ServiceRC() {
    return (
        <div className='bg-violet-50 p-16'>
            <div>
                <div className="section-header text-center">
                    <h2 className="font-bold text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Quality Services</h2>
                    <p className='p-6'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col divide-y-2">
                    <div className='group grid grid-cols-12 text-violet-500 transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white items-center gap-4'>
                        <span className="text-2xl font-semibold col-span-1">01</span>
                        <h3 className="text-3xl font-semibold col-span-4">Branding Design</h3>
                        <span className="col-span-6 text-black group-hover:text-white">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</span>
                        <button type='button' className="col-span-1" title='s'><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
                    </div>
                    <div className='group grid grid-cols-12 text-violet-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white items-center gap-4'>
                        <span className="text-2xl font-semibold col-span-1">02</span>
                        <h3 className="text-3xl font-semibold col-span-4">Web Design</h3>
                        <span className="col-span-6 text-black group-hover:text-white">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</span>
                        <button type='button' className="col-span-1" title='s'><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
                    </div>
                    <div className='group grid grid-cols-12 text-violet-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white items-center gap-4'>
                        <span className="text-2xl font-semibold col-span-1">03</span>
                        <h3 className="text-3xl font-semibold col-span-4">UI/UX Design</h3>
                        <span className="col-span-6 text-black group-hover:text-white">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</span>
                        <button type='button' className="col-span-1" title='s'><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
                    </div>
                    <div className='group grid grid-cols-12 text-violet-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white items-center gap-4'>
                        <span className="text-2xl font-semibold col-span-1">04</span>
                        <h3 className="text-3xl font-semibold col-span-4">Graphics Design</h3>
                        <span className="col-span-6 text-black group-hover:text-white">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</span>
                        <button type='button' className="col-span-1" title='s'><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceRC