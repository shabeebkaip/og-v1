"use client"
import Image from 'next/image'
import ReactPlayer from 'react-player'


const ReverseSponser = ({reverse}) => {
    return (
        <div className='md:py-24 pt-10 md:pt-0 px-3 md:px-0 mt-16'>
            <div className='flex items-center justify-center text-center'>
                <p className='uppercase xl:text-[50px]  text-[40px] font-medium text-[#FF8500] md:border-2 rounded-[45px] border-[#4C4C4D] px-4 '>hackathon <span className='border-2 rounded-[45px] border-[#4C4C4D] px-4 md:border-none'>sponsors</span></p>
            </div>
            <div className='flex items-center justify-center gap-10 p-5'>
                {
                    reverse?.sponsors?.map((item, index) => (
                        <Image key={index} src={item.image} className='w-[120px] h-[100px] object-contain md:w-[280px] md:h-40 md:object-contain ' width={200} height={200} alt=''/>

                    ))
                }
            </div>
            <div className='flex flex-col items-center justify-center' style={{ borderRadius: '100px', overflow: 'hidden' }}>
                <ReactPlayer
                    url={reverse?.video}
                    className='md:w-[60%] w-full h-full'
                    controls={true}
                    style={{ borderRadius: '23px' }}
                    width='60%'
                />
            </div>

        </div>
    )
}

export default ReverseSponser
