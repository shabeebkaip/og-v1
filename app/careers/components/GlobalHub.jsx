
import BlueGradient from '@/app/shared/components/BlueGradient'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import PageContents from '@/app/shared/components/PageContents'

const GlobalHub = async ({ data }) => {
    const pageContent = data
    const pageContent1 = pageContent?.pageContent[0]
    const text = pageContent1?.text

    return (
        <div>
            <div className='relative flex justify-center w-full mt-6 md:mt-28 mb-6 '>
                <div className='w-[20%] absolute md:h-full h-[100px] top-[10%] left-[10%] md:block hidden '><BlueGradient /></div>
                <h3 className='2xl:text-[50px] xl:text-[40px] md:text-[30px] text-center 2xl:w-[63%] text-[25px]  font-medium text-gray-500 bg-white p-5 rounded-3xl w-full'>
                    <PageContents text={text} pageContent1={pageContent1} />

                </h3>
                <div className='w-[20%] absolute md:h-full h-[100px] right-[5%] top-[-10%] md:block hidden'><OrangeGradient /></div>
            </div>
        </div>
    )
}

export default GlobalHub

