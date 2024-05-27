
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import MobHeroSlider from '@/app/shared/components/MobHeroSlider'
import { getGlobalCookie } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import MotionDiv from '@/app/shared/components/MotionDiv'
import { baseURL } from '@/app/constant'




const Hero = ({ data }) => {
  const textArray = data?.text?.split(" ").reduce((acc, word) => {
    // Check if the word is "TO", "OG", or "HUB"
    if (word === "TO" || word === "OG" || word === "HUB") {
      // If "TO OG HUB" hasn't been added yet, add it to the array
      if (!acc.includes("TO OG HUB")) {
        acc.push("TO OG HUB");
      }
    } else {
      // Otherwise, add the word to the array
      acc.push(word);
    }
    return acc;
  }, []);
  const borderWord = textArray?.find(word => word.toLowerCase() === data?.borderText.toLowerCase());

  const language = getGlobalCookie('language')

  const handleNavigation = (link) => {
    window.open(link)
  }


  return (
    <div

      className='flex w-full gap-4 font-Sans relative'>
      {/* <div className='w-[95%] h-[20%] absolute md:hidden block bottom-[-113px]  '>
          <OrangeGradient />
        </div> */}
      <div className='w-full h-[20%] bottom-[-10%] absolute md:hidden block '>
        <OrangeGradient />
      </div>
      <MotionDiv
        styles='flex lg:w-[55%] w-full flex-col bg-white box-shadow rounded-[23px] justify-center  gap-10 relative z-1000' >
        <MobHeroSlider item={[data?.image, data?.image_1, data?.image_2]} />
        <div className='w-[20%] h-[20%] absolute md:block hidden'>
          <OrangeGradient />
        </div>
        <div className='w-[25%] h-[20%] absolute right-0 top-[20%] md:block hidden'>
          <OrangeGradient />
        </div>



        <div className='flex items-center justify-center w-full'>
          <div className=' w-[70%] flex flex-col text-[#656565] '>
            {/* Using the textArray to render dynamic content */}
            {
              textArray
                ?.filter(text => text?.trim() !== '') // Filter out blank entries
                .map((text, index, array) => (
                  <div
                    key={index}
                    className={`xl:leading-[80px] leading-[60px] font-medium items-center text-[30px] w-full sm:text-[40px] xl:text-[50px] 2xl:text-[70px] flex ${index % 2 === 0 ? ' justify-start' : ' justify-end'
                      } capitalize gap-2`}
                  >
                    {index === array.length - 1 && (
                      <Image className='w-1/3 h-full' src={"/Home/arrow.png"} alt="" width={200} height={200} />
                    )}
                    <span className=' px-5 py-2 rounded-[53px]' style={{ border: text?.toLowerCase() === borderWord?.toLowerCase() ? '2px solid #656565' : 'none' }}>
                      {text}
                    </span>
                  </div>
                ))
            }

          </div>
        </div>
        <div className='ml-[15%] pb-5  '>
          <Link href="/programs">
            <button className='border px-9 py-3 rounded-[40px] border-[#FF8500] text-[20px] text-[#1C2126]'>
              Our Programs
              <span className='pl-4'>&rarr;</span>
            </button>
          </Link>
        </div>

      </MotionDiv>
      <MotionDiv
        styles='w-[45%] lg:flex flex-col gap-4 hidden ' >
        <Image src={data?.image} alt='Image' className=' h-auto rounded-[23px]' width={1000} height={200} />
        <div className='flex items-center w-full gap-[1%]' >
          <Image src={data?.image_1} alt='Image' className='w-1/2 h-auto rounded-[23px]' width={1000} height={200} />
          <Image src={data?.image_2} alt='Image' className='w-1/2 h-auto rounded-[23px]' width={1000} height={200} />
        </div>
      </MotionDiv>
    </div>
  )
}



export default Hero