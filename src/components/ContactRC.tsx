import { FaAt, FaHome, FaUser } from 'react-icons/fa'

function ContactRC() {
    return (
        <div id='link-contact' className='bg-violet-50 p-4 md:p-16 w-full flex flex-col md:flex-row gap-4'>
            <div className="text-left bg-white rounded-xl p-6">
                <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">Let’s work together!</h2>
                <p className='py-6'>I specialize in crafting elegant and efficient Java software solutions, and I'm passionate about my work. It's as straightforward as that!</p>
                <div>
                    <div className='flex flex-row gap-4'>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-violet-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="First Name" />
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-violet-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Last Name" />
                    </div>
                    <div className='flex flex-row gap-4'>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-violet-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="Email" />
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-violet-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="Phone" />
                    </div>
                    <div className='flex flex-row gap-4'>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-violet-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" placeholder="Email" />
                    </div>
                    <div>
                        <button type="button" className='rounded-full text-white font-medium px-6 py-4 bg-gradient-to-r from-violet-500  to-indigo-900 to-85% transition duration-1000 hover:from-indigo-900  hover:to-violet-500'>Send Message</button>
                    </div>
                </div>
            </div>
            <div className='m-2 md:m-10 flex flex-col gap-6'>
                <div className='flex flex-row gap-4'>
                    <div className='p-4 text-white text-xl bg-violet-500 rounded-full text-center'>
                        <FaUser />
                    </div>
                    <div className='flex flex-col'>
                        <h1>Full Name</h1>
                        <h1 className='font-semibold text-xl'>Ridoy Kumar Joy</h1>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='p-4 text-white text-xl bg-violet-500 rounded-full text-center'>
                        <FaAt />
                    </div>
                    <div className='flex flex-col'>
                        <h1>Email</h1>
                        <h1 className='font-semibold text-xl'>ridoykj@gmail.com</h1>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='p-4 text-white text-xl bg-violet-500 rounded-full text-center'>
                        <FaHome />
                    </div>
                    <div className='flex flex-col'>
                        <h1>Address</h1>
                        <h1 className='font-semibold text-xl'>Savar, Dhaka, Bangladesh</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactRC