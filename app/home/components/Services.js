
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import BlueGradient from '@/app/shared/components/BlueGradient';
import MotionDiv from '@/app/shared/components/MotionDiv';
import PageContents from '@/app/shared/components/PageContents';


const Services = ({ services, pageContent }) => {
    const pageContent1 = pageContent?.pageContent?.[0]
    const text = pageContent1?.text

    return (
        <div className='w-full font-Sans'>

            <div className='relative flex justify-center w-full mt-12 md:mt-28 '>
                <div className='w-[20%] absolute h-full top-[10%] left-[10%] lg:block hidden'><BlueGradient /></div>
                <div className='absolute -mt-36 left-[26rem] h-[300px] w-[300px] block md:hidden z-[-1]'><OrangeGradient /></div>
                <div className='absolute mt-[5rem] -left-28 h-[300px] w-[300px] block md:hidden z-[-1]'><BlueGradient /></div>
                <div className='w-[50%] absolute h-[100%] top-[68%]  block md:hidden left-0 '><BlueGradient /></div>
                <div className='w-[40%] absolute h-[100%] top-[-30%]  block md:hidden right-0 '><OrangeGradient /></div>
                <h3 className='2xl:text-[50px] xl:leading-[70px] lg:leading-[60px] xl:text-[35px] md:text-[30px] text-center 2xl:w-[79%] text-[25px] xl:w-[70%]  font-medium text-gray-500   p-5 rounded-3xl md:z-[100] break-words  z-0'>
                    <PageContents text={text} item={pageContent1} index="0" />
                </h3>
                <div className='w-[20%] absolute h-full right-[5%] top-[-10%] lg:block hidden'><OrangeGradient /></div>
            </div>
            <MotionDiv direction='right' styles='grid grid-cols-1 gap-4 mt-20 md:grid-cols-3'>
                {services?.map((item, index) => (
                    <MotionDiv
                        key={index} styles='flex items-center justify-center w-full box-shadow' inlineStyle={{ backgroundImage: `url(${item.image})`, backgroundPosition: 'right', borderRadius: '23px', backgroundSize: 'cover' }}>
                        <div className=' 2xl:w-[80%] w-[90%] p-4'>
                            <h1 className={` 2xl:text-[26px] text-[23px] font-medium ${item.title.includes('Educational') ? "text-white" : "text-[#4C4C4D]"}  text-[#4C4C4D] w-[85%] uppercase`}>{item.title}</h1>
                            <h3 className={` 2xl:text-[20px] text-lg font-light ${item.title.includes('Educational') ? "text-white" : "text-[#4C4C4D]"} `}>{item.description}</h3>
                        </div>
                    </MotionDiv>
                ))}
            </MotionDiv>
        </div>
    );
};

export default Services;
