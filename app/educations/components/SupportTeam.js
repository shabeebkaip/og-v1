
import { globalGetService } from "@/app/utils/apiServices"
import BlueGradient from "@/app/shared/components/BlueGradient"
import OrangeGradient from "@/app/shared/components/OrangeGradient"


const SupportTeam = ({data}) => {
    
    const pageContent = data
    const pageContent1 = pageContent?.pageContent[0]
    const text = pageContent1?.text

    return (
        <div>
     <div className='flex justify-center w-full mt-16 '>
                    <div className='md:w-[78%]'>
                        <h3 className='2xl:text-[50px] flex flex-col items-center xl:text-[40px] md:text-[30px] text-center text-[25px] font-medium text-gray-500 bg-white lg:p-5 '>
                            {text?.split(pageContent1?.borderText).map((splitText, index) => (
                                <div key={index} style={{ display: 'inline' }}>
                                    {index > 0 && (
                                        <span
                                            className="py-2 px-5 border-2 border-gray-500 rounded-[53px]"
                                            style={{
                                                // If ar_borderText and ar_textColor are the same, apply both border and text color
                                                color:
                                                    pageContent1?.textColor?.trim().toLowerCase() ===
                                                        pageContent1?.borderText?.trim().toLowerCase()
                                                        ? '#FF8500'
                                                        : 'inherit',
                                            }}
                                        >
                                            {pageContent1?.borderText}
                                        </span>
                                    )}
                                    {splitText?.split(' ').map((word, innerIndex) => (
                                        <span
                                            key={innerIndex}
                                            style={{
                                                color:
                                                    pageContent1?.textColor?.trim().toLowerCase() === word.trim().toLowerCase()
                                                        ? '#FF8500'
                                                        : 'inherit',
                                                border:
                                                    pageContent1?.borderText?.trim().toLowerCase() === word.trim().toLowerCase()
                                                        ? '2px solid '
                                                        : 'none',
                                            }}
                                        >
                                            {word}
                                            {innerIndex < splitText?.split(' ').length - 1 && ' '}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </h3>
                    </div>
                    <div className='md:w-[200px] absolute h-[250px] top-[40%] left-[10%] md:block hidden'><BlueGradient /></div>

                    <div className='md:w-[200px] absolute h-[240px] right-[5%] top-[10%] md:block hidden'><OrangeGradient /></div>
                </div>
</div>
    )
}

export default SupportTeam
