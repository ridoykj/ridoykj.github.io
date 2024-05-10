import java from '../assets/icons/skills/java.png';
// import cpp from '../assets/icons/skills/cpp.png';
import springboot from '../assets/icons/skills/spring-boot.png';
import aws from '../assets/icons/skills/aws.png';
import azure from '../assets/icons/skills/azure.png';
import kafka from '../assets/icons/skills/kafka.png';
import mssql from '../assets/icons/skills/mssql.jpg';
import mysql from '../assets/icons/skills/mysql.png';
import csharp from '../assets/icons/skills/csharp.png';
import grafana from '../assets/icons/skills/grafana.png';
import redis from '../assets/icons/skills/redis.png';
import linux from '../assets/icons/skills/linux.png';
import python from '../assets/icons/skills/python.png';
import opencv from '../assets/icons/skills/opencv.png';
import reactjs from '../assets/icons/skills/reactjs.png';
import typescript from '../assets/icons/skills/typescript.png';
type CardDataProps = {
    imageSrc: string,
    title: string,
    percentage: number
}

function SkillsRC() {

    const data = [
        { imageSrc: java, title: 'Java', percentage: 98 },
        // { imageSrc: cpp, title: 'C++', percentage: 75 },
        { imageSrc: csharp, title: 'C#', percentage: 53 },
        { imageSrc: python, title: 'Python', percentage: 52 },
        { imageSrc: typescript, title: 'TypeScript', percentage: 80 },
        { imageSrc: springboot, title: 'Spring Boot', percentage: 92 },
        { imageSrc: reactjs, title: 'ReactJS', percentage: 70 },
        { imageSrc: opencv, title: 'OpenCV', percentage: 80 },
        { imageSrc: kafka, title: 'Apache Kafka', percentage: 75 },
        { imageSrc: redis, title: 'Redis', percentage: 80 },
        { imageSrc: grafana, title: 'Grafana', percentage: 70 },
        { imageSrc: mssql, title: 'Microsoft SQL Server', percentage: 87 },
        { imageSrc: mysql, title: 'MySQL', percentage: 87 },
        { imageSrc: aws, title: 'Amazon Web Services', percentage: 55 },
        { imageSrc: azure, title: 'Azure', percentage: 55 },
        { imageSrc: linux, title: 'Linux', percentage: 93 },
    ]


    const CardData = ({ data }: { data: CardDataProps }) => {
        return (
            <div className='flex flex-col gap-4 items-center text-center'>
                <div className='group bg-violet-50 p-4 rounded-3xl flex flex-col items-center gap-4 hover:bg-violet-900 size-full'>
                    {/* <img src={data.imageSrc} alt="" className='mix-blend-multiply group-hover:mix-blend-normal' /> */}
                    <div className='grow flex items-center justify-center'>
                        <img src={data.imageSrc} alt="" className='mix-blend-luminosity group-hover:mix-blend-normal' />
                    </div>
                    <h1 className='font-semibold text-xl text-gray-500 text-end group-hover:text-violet-400'>{data.percentage}%</h1>
                </div>
                <span className='text-violet-500'>{data.title}</span>
            </div>
        )
    };


    return (
        <div  id='link-skills' className='p-4 md:p-16'>
            <div>
                <div className="section-header text-center">
                    <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-800 to-40% inline-block text-transparent bg-clip-text">My Skills</h2>
                    <p className='p-6'>Here is an overview of my latest software development skills and expertise.</p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {data.map((item, index) => (
                        <CardData key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsRC