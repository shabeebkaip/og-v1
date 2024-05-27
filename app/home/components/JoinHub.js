import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'

const JoinHub = ({ pageContent }) => {
    const pageContent1 = pageContent.pageContent?.[0]
    const text = pageContent1?.text
    return (
        <div>
            <div className='relative flex justify-center w-full mt-16 mb-12 lg:my-28 '>
                <div className='w-[80%]'>
                    <h3 className='2xl:text-[50px] xl:text-[40px] md:text-[30px] text-center  text-[25px] font-medium text-[#4C4C4D]  '>
                        {text?.split(pageContent1?.borderText).map((splitText, index) => (
                            <div key={index} style={{ display: 'inline' }}>
                                {index > 0 && (
                                    <span
                                        className="py-2 px-4 border border-red-500 rounded-[53px]"
                                        style={{
                                            // If borderText and textColor are the same, also color the text
                                            color:
                                                pageContent1?.textColor.trim().toLowerCase() === pageContent1?.borderText.trim().toLowerCase()
                                                    ? '#FF8500'
                                                    : 'inherit',
                                        }}
                                    >
                                        {pageContent1?.borderText}
                                    </span>
                                )}
                                {splitText.split(' ').map((word, innerIndex) => (
                                    <span
                                        key={innerIndex}
                                        style={{
                                            color: pageContent1?.textColor?.trim().toLowerCase() === word.trim().toLowerCase() ? '#FF8500' : 'inherit',
                                            border:
                                                pageContent1?.borderText?.trim().toLowerCase() === word.trim().toLowerCase()
                                                    ? '1px solid red'
                                                    : 'none',
                                        }}
                                    >
                                        {word}
                                        {innerIndex < splitText.split(' ').length - 1 && ' '}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </h3>
                </div>
                <div className='lg:w-[300px] absolute lg:h-[300px] h-[200px] w-[200px] top-[6%] left-0 md:block hidden '><BlueGradient /></div>
                <div className='lg:w-[250px]  w-[200px] h-[100px] absolute lg:h-[300px] top-[5%] right-0 md:block hidden'><OrangeGradient /></div>
            </div>
        </div>
    )
}

export default JoinHub