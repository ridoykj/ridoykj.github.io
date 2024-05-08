import { GoArrowDownRight } from 'react-icons/go'

type CardDataProps = {
    index: string,
    title: string,
    description: string
}

function ServiceRC() {

    const data = [
        {
            index: '01',
            title: 'Branding Design',
            description: 'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people'
        },
        {
            index: '02',
            title: 'Web Design',
            description: 'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people'
        },
        {
            index: '03',
            title: 'UI/UX Design',
            description: 'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people'
        },
        {
            index: '04',
            title: 'Graphics Design',
            description: 'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people'
        }
    ]

    const CardData = ({ data }: { data: CardDataProps }) => {
        return (
            <div className='group grid grid-col-1 md:grid-cols-7 text-violet-500 transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 to-40% p-3 md:p-4 hover:text-white md:items-center md:gap-4'>
                <span className="text-xl font-semibold col-span-1 md:col-span-1">{data.index}</span>
                <span className="text-xl md:text-3xl font-semibold col-span-2 pb-3 md:pb-0">{data.title}</span>
                <span className="md:col-span-3 text-black group-hover:text-white">{data.description}</span>
                <button type='button' className="md:col-span-1 flex items-center" title='Details'><GoArrowDownRight className='size-9 transition duration-200 group-hover:-rotate-90' /></button>
            </div>
        )
    };

    return (
        <div className='bg-violet-50 md:p-16 pt-16'>
            <div>
                <div className="section-header text-center">
                    <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Quality Services</h2>
                    <p className='p-6'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col divide-y-2">
                    {data.map((item, index) => (<CardData key={index} data={item} />))}
                </div>
            </div>
        </div>
    )
}

export default ServiceRC