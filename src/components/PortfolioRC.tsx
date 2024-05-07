import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

type CardDataProps = {
    imageSrc: string,
    title: string,
    description: string
}

function PortfolioRC() {

    const CardData = ({ data }: { data: CardDataProps }) => {
        return (
            <div className="relative group rounded-xl">
                <img src={data.imageSrc} alt="Product" className="w-full h-auto rounded-xl" />
                <div className="absolute bottom-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center w-full">
                    <div className="flex flex-row text-white text-center bg-gradient-to-r from-violet-500 to-indigo-900 to-85% rounded-2xl m-4 p-4 w-full">
                        <div className='grow'>
                            <h3 className="text-3xl font-bold text-left">{data.title}</h3>
                            <p className="mt-2 text-left">{data.description}</p>
                        </div>
                        <button type='button' className="col-span-1" title='s'><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
                    </div>
                </div>
            </div>
        )
    };

    const data = [
        {
            imageSrc: 'src/assets/photo/ridoy.png',
            title: 'Title',
            description: 'Description'
        },
        {
            imageSrc: 'src/assets/photo/ridoy.png',
            title: 'Title',
            description: 'Description'
        },
        {
            imageSrc: 'src/assets/photo/ridoy.png',
            title: 'Title',
            description: 'Description'
        },
        {
            imageSrc: 'src/assets/photo/ridoy.png',
            title: 'Title',
            description: 'Description'
        }
    ]

    return (
        <div className='p-16'>
            <div>
                <div className="section-header text-center">
                    <h2 className="font-bold text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Recent Works</h2>
                    <p className='p-6'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
            </div>
            <div>
                <div className=''>
                    <Tabs className="w-full flex flex-col items-center">
                        <TabList className="flex flex-row rounded-full bg-violet-50 px-2 text-violet-500 place-content-center w-fit">
                            <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">All</Tab>
                            <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">UX/UI</Tab>
                            <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">Branding</Tab>
                            <Tab className="py-4 px-4 rounded-full " selectedClassName="bg-gradient-to-r from-violet-500 to-indigo-900 to-85% text-white">Apps</Tab>
                        </TabList>
                        <TabPanel className="w-full m-6">
                            <div className='grid grid-cols-2 gap-8'>
                                {data.map((item, index) => (
                                    <CardData key={index} data={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel className="w-full">
                            <div className='grid grid-cols-2 gap-8'>
                                {data.map((item, index) => (
                                    <CardData key={index} data={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel className="w-full">
                            <div className='grid grid-cols-2 gap-8'>
                                {data.map((item, index) => (
                                    <CardData key={index} data={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel className="w-full">
                            <div className='grid grid-cols-2 gap-8'>
                                {data.map((item, index) => (
                                    <CardData key={index} data={item} />
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default PortfolioRC