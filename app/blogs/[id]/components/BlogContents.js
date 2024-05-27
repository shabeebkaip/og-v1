import BlueGradient from '@/app/shared/components/BlueGradient'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft'
import moment from "moment";
import { displayDateFormatShort } from "@/app/constant";
import Image from 'next/image';


const BlogContents = ({blogDetail}) => {
  const midpoint = Math.ceil(blogDetail?.description?.length / 2);

  const renderDescriptionWithImages = (descriptionArray, startIndex) => {
    return descriptionArray?.map((item, index) => {
      const imageIndex = Math.floor((index + startIndex));
      if (blogDetail?.image?.[imageIndex] && imageIndex % 2 == 0) {
        return (
          <div key={index}>
            <Image blurDataURL='lazy' width={1000} height={500} className="xl:h-[370px] h-[250px] object-cover rounded-3xl" src={blogDetail.image[imageIndex]} alt={blogDetail.image[imageIndex].alt}  />
            <p className=" text-[#4C4C4D] font-light text-[24px]  capitalize ">{item.text}</p>
          </div>
        );
      }
      return <p key={index} >{item.text}</p>;
    });
  };
  const renderDescriptionWithImagesRight = (descriptionArray, startIndex) => {
    return descriptionArray?.map((item, index) => {
      const imageIndex = Math.floor((index + startIndex));
      if (blogDetail?.image?.[imageIndex] && imageIndex % 2 !== 0) {
        return (
          <div key={index}>
            <Image blurDataURL='lazy' width={1000} height={500} className="xl:h-[370px] h-[250px] object-cover rounded-3xl" src={blogDetail.image[imageIndex]} alt={blogDetail.image[imageIndex].alt}  />
            <p className=" text-[#4C4C4D] font-light text-[24px] capitalize ">{item.text}</p>
          </div>
        );
      }
      return <p key={index} className="">{item.text}</p>;
    });
  };
  return (
    <div className='flex flex-col gap-10 relative '>

      <div className='container mx-auto '>
        <div className="md:text-5xl text-3xl relative sm:px-0 px-3 font-medium text-[#656565] text-center py-16">
          <p className='capitalize'>{blogDetail?.title}</p>
          <div className="absolute lg:top-[24%] md:top-[10%] sm:top-[-40%] top-[-10%]  md:w-[300px] w-[200px] md:h-[300px] h-[200px] lg:right-[10%] hidden lg:block  ">
            <OrangeGradient className="" />
          </div>
          <div className="absolute md:w-[300px] w-[200px] md:h-[300px] h-[200px] md:left-[5%] left-[-30px] md:top-[24%] bottom-[-50%]  hidden lg:block ">
            <BlueGradient />
          </div>

        </div>
        <div className="flex items-center justify-center mt-12 px-5">
          <div className="bg-white rounded-3xl box-shadow">
            <div className="m-5 rounded-[10px]">
              <h2 className="md:text-3xl text-xl font-normal mb-4 leading-23 tracking-normal  ">
                <span className="block capitalize ">{blogDetail?.shortDescription}</span>
              </h2>
              <div className="flex gap-5 ">
                <p className=' capitalize'>{blogDetail?.createdAt ? moment(blogDetail?.createdAt).format(displayDateFormatShort) : "--"}</p>
                <p>{new Date(blogDetail?.createdAt).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}</p>
              </div>
              <div className="flex gap-8 flex-col md:flex-row mt-12 ">
                <div className="w-full  md:w-1/2 flex flex-col gap-8 xl:text-[24px] text-lg text-[#4C4C4D] font-light capitalize">
                  {renderDescriptionWithImages(blogDetail?.description?.slice( 0,midpoint), 0)}
                </div>
                <div className="flex flex-col gap-8 md:w-1/2 xl:text-[24px] text-lg text-[#4C4C4D] w-full font-light capitalize">
                  {renderDescriptionWithImagesRight(blogDetail?.description?.slice(midpoint), 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] right-8 bottom-[-150px] hidden md:block   ">
        <OrangeGradient className="" />
      </div>
      <div className="absolute lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] left-8 bottom-[-150px] hidden md:block">
        <BlueGradient />
      </div>
      <div className="absolute w-[200px] h-[200px]  sm:bottom-[-650px] bottom-[-500px] right-0 md:hidden">
        <OrangeGradientLeft />
      </div>

    </div>
  )
}

export default BlogContents
