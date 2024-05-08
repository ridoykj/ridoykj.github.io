import { FaGraduationCap } from 'react-icons/fa6'
import { RiLightbulbFlashLine } from 'react-icons/ri'

type CardDataProps = {
    title: string,
    dataRange: string,
    description: string
}

function ResumeRC() {

    const dataExperience = [
        {
            title: 'Sr. Java Software Developer',
            dataRange: '2022-Present',
            description: 'De-Soft Ltd. - Dhaka, Bangladesh'
        },
        {
            title: 'Java Software Developer',
            dataRange: '2019-2022',
            description: 'Naztech Inc. - Dhaka, Bangladesh'
        },
        {
            title: 'Trainer & Mentor',
            dataRange: '2018-2022',
            description: 'Naztech Inc. - Dhaka, Bangladesh'
        }
    ]

    const dataEducation = [
        {
            title: 'B.Sc in CSE',
            dataRange: '2020-2024',
            description: 'Dhaka International University'
        },
        {
            title: 'Diploma in CSE',
            dataRange: '2014-2018',
            description: 'Dhaka Polytechnic Institute'
        },
        {
            title: 'CBT&A in IT-Support I',
            dataRange: '2018',
            description: 'NTVQF'
        },
    ]


    const CardData = ({ data }: { data: CardDataProps }) => {
        return (<div className='group flex flex-col transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-4 hover:text-white text-left md:gap-4 rounded-2xl bg-white w-full'>
            <span className="text-lg md:text-2xl text-violet-500 group-hover:text-white font-semibold">{data.dataRange}</span>
            <h3 className="text-xl md:text-3xl font-semibold">{data.title}</h3>
            <span className="text-black group-hover:text-white">{data.description}</span>
        </div>)
    };

    return (
        <div id='link-resume' className='bg-violet-50 flex flex-col md:items-center p-4 md:p-16 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 p-4'>
                <div className="text-center">
                    <div className='inline-flex font-bold text-4xl md:text-5xl gap-3 pb-8'>
                        <RiLightbulbFlashLine className='text-violet-500' />
                        <h2 className="bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Experience</h2>
                    </div>
                    <div className='flex flex-col gap-8'>
                        {dataExperience.map((data, index) => <CardData key={index} data={data} />)}
                    </div>
                </div>
                <div className="text-center">
                    <div className='inline-flex font-bold text-4xl md:text-5xl gap-3 pb-8'>
                        <FaGraduationCap className='text-violet-500' />
                        <h2 className="bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Education</h2>
                    </div>
                    <div className='flex flex-col gap-8'>
                        {dataEducation.map((data, index) => <CardData key={index} data={data} />)}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ResumeRC