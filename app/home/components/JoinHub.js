import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'

const JoinHub = ({ pageContent }) => {
    const pageContent1 = pageContent.pageContent?.[1]
    const text = pageContent1?.text
    return (
        <div>
            <div className='relative flex justify-center w-full mt-16 mb-12 lg:my-28 '>
                <div className='w-[80%]'>
                    <h3 className='2xl:text-[50px] xl:text-[40px] md:text-[30px] text-center  text-[25px] font-medium text-[#4C4C4D]  '>
                        <span>
                            {text.split(pageContent1?.borderText).map((splitText, index) => (
                                <div key={index} style={{ display: 'inline' }}>
                                    {index > 0 && (
                                        <span
                                            className="py-2 px-5 border rounded-[23px]"
                                            style={{
                                                color: 
                                                    pageContent1.textColor.trim().toLowerCase() === pageContent1.borderText.trim().toLowerCase() ||
                                                        pageContent1.textColor_1.trim().toLowerCase() === pageContent1.borderText_1.trim().toLowerCase() 
                                                        ? '#FF8500'
                                                        : 'inherit',
                                                borderColor: '#FF8500', // Apply border color based on borderText
                                                borderWidth: '1px',
                                            }}
                                        >
                                            {pageContent1?.borderText}
                                        </span>
                                    )}
                                    {splitText.split(pageContent1?.borderText_1).map((innerSplitText, innerIndex) => (

                                        <span key={innerIndex}>

                                            {innerSplitText.split(' ').map((word, wordIndex) => (
                                                <span
                                                    key={wordIndex}
                                                    style={{
                                                        color:
                                                            pageContent1.textColor.trim().toLowerCase().includes(word.trim().toLowerCase()) ||
                                                                pageContent1.textColor_1.trim().toLowerCase().includes(word.trim().toLowerCase())
                                                                ? '#FF8500'
                                                                : 'inherit',
                                                        border: 'none', // Remove border from words
                                                    }}
                                                >
                                                    {word}
                                                    {wordIndex < innerSplitText.split(' ').length - 1 && ' '}
                                                </span>
                                            ))}
                                            {innerIndex < splitText.split(pageContent1?.borderText_1).length - 1 && (
                                                <span
                                                    className="py-2 px-5 border rounded-[23px]"
                                                    style={{
                                                        color:
                                                            pageContent1.textColor.trim().toLowerCase() === pageContent1.borderText_1.trim().toLowerCase() ||
                                                                pageContent1.textColor_1.trim().toLowerCase() === pageContent1.borderText_1.trim().toLowerCase()
                                                                ? '#FF8500'
                                                                : 'inherit',
                                                        borderColor: '#FF8500', // Apply border color based on borderText_1
                                                        borderWidth: '1px',
                                                    }}
                                                >
                                                    {pageContent1?.borderText_1}
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </span>
                    </h3>
                </div>
                <div className='lg:w-[300px] absolute lg:h-[300px] h-[200px] w-[200px] top-[6%] left-0 md:block hidden '><BlueGradient /></div>
                <div className='lg:w-[250px]  w-[200px] h-[100px] absolute lg:h-[300px] top-[5%] right-0 md:block hidden'><OrangeGradient /></div>
            </div>
        </div>
    )
}

export default JoinHub