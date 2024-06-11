import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'
import PageContents from '@/app/shared/components/PageContents'

const JoinHub = ({ pageContent }) => {
    const pageContent1 = pageContent.pageContent?.[1]
    const text = pageContent1?.text
    return (
        <div>
            <div className='relative flex justify-center w-full mt-16 mb-12 lg:my-28 '>
                <div className='w-[80%]'>
                    <h3 className='2xl:text-[50px] xl:text-[40px] md:text-[30px] text-center  text-[25px] font-medium text-[#4C4C4D]  '>
                        <PageContents text={text} pageContent1={pageContent1} />
                    </h3>
                </div>
                <div className='lg:w-[300px] absolute lg:h-[300px] h-[200px] w-[200px] top-[6%] left-0 md:block hidden '><BlueGradient /></div>
                <div className='lg:w-[250px]  w-[200px] h-[100px] absolute lg:h-[300px] top-[5%] right-0 md:block hidden'><OrangeGradient /></div>
            </div>
        </div>
    )
}

export default JoinHub