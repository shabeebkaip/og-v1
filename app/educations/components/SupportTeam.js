
import { globalGetService } from "@/app/utils/apiServices"
import BlueGradient from "@/app/shared/components/BlueGradient"
import OrangeGradient from "@/app/shared/components/OrangeGradient"
import PageContents from "@/app/shared/components/PageContents"


const SupportTeam = ({ data }) => {

    const pageContent = data
    const pageContent1 = pageContent?.pageContent[0]
    const text = pageContent1?.text

    return (
        <div>
            <div className='flex justify-center w-full mt-16 '>
                <div className='md:w-[78%]'>
                    <h3 className='2xl:text-[50px] flex flex-col items-center xl:text-[40px] md:text-[30px] text-center text-[25px] font-medium text-gray-500 bg-white lg:p-5 '>
                        <PageContents text={text} item={pageContent1} index="0" />
                    </h3>
                </div>
                <div className='md:w-[200px] absolute h-[250px] top-[40%] left-[10%] md:block hidden'><BlueGradient /></div>

                <div className='md:w-[200px] absolute h-[240px] right-[5%] top-[10%] md:block hidden'><OrangeGradient /></div>
            </div>
        </div>
    )
}

export default SupportTeam
