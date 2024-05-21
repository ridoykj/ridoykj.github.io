import { GoArrowDownRight } from 'react-icons/go'
import ModalRC from '../components/ModelRC';
import { useState } from 'react';

type CardDataProps = {
    index: string,
    title: string,
    description: string
}

function ServiceRC() {

    const [dataInfo, setdataInfo] = useState<CardDataProps>({} as CardDataProps)
    const [open, setOpen] = useState<boolean>(false)

    const data = [
        {
            index: '01',
            title: 'Strong Java Fundamentals',
            description: 'I have a deep understanding of Java syntax, object-oriented programming (OOP) principles, and core libraries, allowing me to write efficient and reliable code.'
        },
        {
            index: '02',
            title: 'Clean Code Practices',
            description: 'Prioritize writing code that is well-formatted, easy to read, and understandable by others. This includes using meaningful variable names, proper indentation, and commenting my code.'
        },
        {
            index: '03',
            title: 'Unit Testing',
            description: 'Actively write unit tests to verify the functionality of my code modules in isolation. This helps catch bugs early on and ensures my code behaves as expected.'
        },
        {
            index: '04',
            title: 'Code Reusability',
            description: 'Strive to write reusable code components that can be leveraged across different parts of the application, reducing redundancy and maintenance effort.'
        },
        {
            index: '05',
            title: 'Design Patterns',
            description: 'Understand and apply appropriate design patterns to structure my code for flexibility and maintainability. This promotes loose coupling and easier modification in the future.'
        },
        {
            index: '06',
            title: 'Documentation',
            description: 'Document my code clearly, explaining its purpose, functionality, and usage. This aids other developers in understanding and modifying the codebase.'
        },
        {
            index: '07',
            title: 'Understanding Testing Principles',
            description: 'Grasp the importance of different testing levels (unit, integration, system) and collaborate with QA testers effectively.'
        },
        {
            index: '08',
            title: 'Bug Fixing',
            description: 'Possess strong debugging skills to identify, diagnose, and fix bugs efficiently. This minimizes application defects and improves overall quality.'
        },
        {
            index: '09',
            title: 'Performance Optimization',
            description: 'I am aware of potential performance bottlenecks in Java applications and can identify areas for improvement. I might suggest code optimizations or utilize profiling tools to enhance application responsiveness.'
        },
        {
            index: '10',
            title: 'Adherence to Coding Standards',
            description: 'Follow established coding conventions within my team or project to ensure consistency and maintainability across the codebase.'
        },
        {
            index: '11',
            title: 'Communication and Collaboration',
            description: 'Effectively communicate technical concepts to other developers, testers, and stakeholders. This fosters collaboration and helps ensure everyone is on the same page regarding quality expectations.'
        }
    ]

    const CardData = ({ data }: { data: CardDataProps }) => {
        return (
            <div className='group grid grid-col-1 md:grid-cols-7 md:gap-4 md:p-4 md:items-center transition duration-300 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-3 '>
                <span className="text-xl font-semibold col-span-1 md:col-span-1 text-violet-500 group-hover:text-white">{data.index}</span>
                <span className="text-xl md:text-3xl font-semibold col-span-2 pb-3 md:pb-0 text-violet-500 group-hover:text-white">{data.title}</span>
                <span className="md:col-span-3 text-black group-hover:text-white">{data.description}</span>
                <button type='button' className="md:col-span-1 flex items-center text-violet-500 group-hover:text-white" title='Details'
                    onClick={() => {
                        setOpen(true);
                        setdataInfo(data)
                    }}
                ><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
            </div>
        )
    };

    return (
        <div id='link-service' className='bg-violet-50 md:p-16 pt-16'>
            <div>
                <div className="section-header text-center">
                    <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Quality Services</h2>
                    <p className='p-6'>In my role as a Java developer, my Quality Services (QS) focus on writing clean, maintainable, and robust code that contributes to high-quality software. Here's how my skills translate into delivering quality.</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col divide-y-2">
                    {data.map((item, index) => (<CardData key={index} data={item} />))}
                </div>
            </div>
            <ModalRC open={open} onClose={() => { setOpen(false) }} >
                <h1>{dataInfo.title}</h1>
            </ModalRC>
        </div>
    )
}

export default ServiceRC