import { GoArrowDownRight } from 'react-icons/go'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import code from '../assets/icons/code2.png';
import cib from '../assets/photo/works/cib.png';
import vms from '../assets/photo/works/vms.jpeg';
import clubapp from '../assets/photo/works/clubapp.webp';
import waiterapp from '../assets/photo/works/waiterapp.jpg';
import studentapp from '../assets/photo/works/studentapp.jpeg';
import electionapp from '../assets/photo/works/electionapp.jpg';
import deerp from '../assets/photo/works/deerp.jpg';

type CardDataProps = {
    imageSrc: string,
    title: string,
    description: string
}

function PortfolioRC() {

    const dataAnalysis = [
        {
            imageSrc: code,
            title: 'Docutech',
            description: 'This project is developing an Specialized Receipt & Invoice (PDF) Extraction System for a client. The system will be able to extract data from the PDF and store it in the database...'
        },
        {
            imageSrc: code,
            title: 'JobHarvester',
            description: 'This project is developing a specialized tool for scraping job circular information from various job sites and storing them in a database...'
        },
        {
            imageSrc: code,
            title: 'PricePrompt',
            description: 'This project is developing a specialized tool web scraping tool for extracting product information from various e-commerce websites, products tracking and price drop alert (Email)...'
        }
    ]

    const computerVision = [
        {
            imageSrc: electionapp,
            title: 'De-Smart Election',
            description: 'This project is developing a specialized tool for counting votes from the scanned ballot paper...'
        },
        {
            imageSrc: vms,
            title: 'Visitor Management System – VMS',
            description: 'This project is developing a Managing Port Visitor which insure port entry security, Vehicle Verification, Door Manager, Guest manager, Visitor Pass Generator and many more...'
        }
    ]


    const modules = [
        {
            imageSrc: cib,
            title: 'CIB Integration - Bangladesh Bank',
            description: 'This project is developing a specialized tool for integrating the Core Banking System with the Bangladesh Bank...'
        },
        {
            imageSrc: deerp,
            title: 'De-ERP',
            description: 'This project is developing a specialized tool for managing a company’s resources...'
        }
    ]

    const mobileApps = [
        {
            imageSrc: clubapp,
            title: 'De-Club',
            description: 'This project is developing a specialized app for managing club members. The system will be able to manage club members, club events, club fees, club reports and many more...'
        },
        {
            imageSrc: studentapp,
            title: 'De-Student',
            description: 'This project is developing a specialized app for managing students. The system will be able to manage students, student fees, student reports and many more...'
        },
        {
            imageSrc: waiterapp,
            title: 'Waiter App',
            description: 'This project is developing a specialized app for managing restaurant (Club) orders. The system will be able to manage restaurant orders, restaurant menu, restaurant reports and many more...'
        }
    ]

    const CardData = ({ data }: { data: CardDataProps }) => {
        return (
            <div className="relative group rounded-xl hover:shadow-xl shadow-violet-800/30">
                <div className='rounded-xl h-[20rem] border-2 border-violet-300 overflow-hidden flex items-center justify-center'>
                    <img src={data.imageSrc} alt="Product" className="rounded-xl object-contain h-[35rem]" />
                </div>
                <div className="absolute bottom-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center w-full">
                    <div className="flex flex-row text-white text-center bg-gradient-to-r from-violet-500 to-indigo-900 to-85% rounded-2xl m-4 p-4 w-full">
                        <div className='grow'>
                            <h3 className="text-xl font-bold text-left">{data.title}</h3>
                            <p className="mt-2 text-left">{data.description}</p>
                        </div>
                        <button type='button' className="col-span-1" title='Details'><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
                    </div>
                </div>
            </div>
        )
    };
    return (
        <div id='link-works' className='p-4 md:p-16'>
            <div>
                <div className="section-header text-center">
                    <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Recent Works</h2>
                    <p className='p-6'>Here is a showcase of the software development projects I have recently undertaken.</p>
                </div>
            </div>
            <div>
                <Tabs className="w-full flex flex-col items-center">
                    <TabList className="flex flex-row rounded-full bg-violet-50 px-2 m-4 text-violet-500 place-content-center w-fit">
                        <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">All</Tab>
                        <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">Data Analysis</Tab>
                        <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">Computer Vision</Tab>
                        <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">Modules</Tab>
                        <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">Apps</Tab>
                    </TabList>
                    <TabPanel className="w-full">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {[...dataAnalysis, ...computerVision, ...modules, ...mobileApps].map((item, index) => (
                                <CardData key={index} data={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel className="w-full">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {dataAnalysis.map((item, index) => (
                                <CardData key={index} data={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel className="w-full">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {computerVision.map((item, index) => (
                                <CardData key={index} data={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel className="w-full">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {modules.map((item, index) => (
                                <CardData key={index} data={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel className="w-full">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {mobileApps.map((item, index) => (
                                <CardData key={index} data={item} />
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default PortfolioRC