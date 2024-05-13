import { FaAt, FaHome, FaUser } from 'react-icons/fa'
function ContactRC() {

    const InputField = ({ id, label, className }: { id: string, label: string, className?: string }) => {
        return (
            <div className="group relative w-full">
                <input className={`peer border-2 rounded-lg bg-transparent px-4 py-3 text-base text-gray-700 transition duration-150 ease-in-out focus:outline-none focus:border-purple-600 ${className}`} type="text" id={id} name={id} title={label ?? 's'} />
                <label className="absolute text-lg left-4 text-gray-400 pointer-events-none bg-white transition duration-150 ease-in-out transform translate-y-3 peer-focus:-translate-y-2 peer-focus:text-sm peer-focus:text-purple-600">{label}</label>
            </div>
        )
    }
    return (
        <div id='link-contact' className='bg-violet-50 p-4 md:p-16 w-full flex flex-col md:flex-row gap-4 '>
            <div className="text-left bg-white rounded-xl p-6 w-full md:w-1/2">
                <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">Let’s work together!</h2>
                <p className='py-6'>I specialize in crafting elegant and efficient Java software solutions, and I'm passionate about my work. It's as straightforward as that!</p>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-4'>
                        <InputField id='first-name' label='First Name' className='w-full' />
                        <InputField id='last-name' label='Last Name' className='w-full' />
                    </div>
                    <div className='flex flex-row gap-4'>
                        <InputField id='email' label='Email' className='w-full' />
                        <InputField id='phone' label='Phone' className='w-full' />
                    </div>
                    <div>
                        <textarea className="appearance-none block w-full  text-gray-700 border border-violet-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="message" placeholder="Message" />
                    </div>
                    <div>
                        <button type="button" className='rounded-full text-white font-medium px-6 py-4 bg-gradient-to-r from-violet-500 to-indigo-900 to-85% transition ease-in-out delay-150 duration-300 hover:from-indigo-900 hover:to-violet-500'>Send Message</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 m-2 md:m-10'>
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