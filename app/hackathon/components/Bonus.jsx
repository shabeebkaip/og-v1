"use client"
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'

const Bonus = ({ bonus }) => {
    const handleNavigation = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className='relative my-32 md:px-3 px-6'>
            <div className="absolute top-[-16%] right-0 w-[20%] h-[36%] md:block hidden"><OrangeGradient /></div>
            <div className="absolute top-[4%] left-0 w-[20%] h-[36%] md:block hidden"><BlueGradient /></div>
            <div className='lg:text-[50px] sm:text-[40px] text-[30px] font-medium flex flex-col justify-center items-center text-center'>
                <h3 className='uppercase text-[#4C4C4D] '>Bonus: Blog Post Prize  </h3>
                <h3 className='text-[#FF8500] border-2  rounded-[45px] border-[#4C4C4D] px-4'>Bonus:</h3>
            </div>
            <div className='flex flex-col gap-10 pt-20 md:flex-row'>
                {
                    bonus?.slice(0,2).map((item, index) => (
                        <div className=' md:w-[50%] flex flex-col gap-4' key={index}>
                            <p className='text-[#4C4C4D] xl:text-[26px] sm:text-[24px] text-[16px] font-light'>
                                {item?.text}
                            </p>
                            <p className='text-[#4C4C4D] xl:text-[26px] sm:text-[24px] text-[16px] font-light'>
                                {item?.text_1}
                            </p>
                            <div className='flex pt-12 '>
                                <button onClick={() => handleNavigation(item?.btnLink)} className='text-black text-[20px] border border-[#FF8500] rounded-[40px] xl:px-5 px-3 py-3 font-medium'>{item?.btnText} <span className='pl-4'>&rarr;</span></button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Bonus
