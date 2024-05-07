import logo from '../assets/icons/code2.png';

type CardDataProps = {
    imageSrc: string,
    title: string,
    percentage: number
}

function SkillsRC() {

    const CardData = ({ data }: { data: CardDataProps }) => {
        return (
            <div className='flex flex-col gap-4 items-center'>
                <div className='group bg-violet-50 p-4 rounded-3xl flex flex-col items-center gap-4 hover:bg-violet-900'>
                    <img src={data.imageSrc} alt="" className='bg-blend-screen' />
                    <h1 className='font-semibold text-xl text-gray-500 group-hover:text-violet-400'>{data.percentage}%</h1>
                </div>
                <span className='text-violet-500'>{data.title}</span>
            </div>
        )
    };

    const data = [
        {
            imageSrc: logo,
            title: 'Title',
            percentage: 25
        },
        {
            imageSrc: logo,
            title: 'Title',
            percentage: 65
        },
        {
            imageSrc: logo,
            title: 'Title',
            percentage: 89
        },
        {
            imageSrc: logo,
            title: 'Title',
            percentage: 10
        },
        {
            imageSrc: logo,
            title: 'Title',
            percentage: 10
        },
        {
            imageSrc: logo,
            title: 'Title',
            percentage: 10
        }
    ]

    return (
        <div className='p-16'>
            <div>
                <div className="section-header text-center">
                    <h2 className="font-bold text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Skills</h2>
                    <p className='p-6'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-5 gap-6'>
                    {data.map((item, index) => (
                        <CardData key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsRC