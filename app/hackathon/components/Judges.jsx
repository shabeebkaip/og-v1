import Image from "next/image"


const Judges = ({ hackathonData }) => {

    return (
        <div className='mt-32 px-3'>

            <div className='lg:text-[50px] text-[30px] font-medium flex flex-col justify-center items-center gap-4'>
                <h3 className='text-[#FF8500] border-2  rounded-[45px] border-[#4C4C4D] px-4'>JUDGES</h3>
                <h3 className='lowercase text-[#4C4C4D] '>and JUDGING CRITERIA </h3>

            </div>


            <div className='grid grid-cols-12 gap-4 mt-32'  >
                <div className='col-span-8 box-shadow rounded-[23px] flex justify-center py-8  '>
                    <div className='grid grid-cols-2 gap-4 p-4  '>
                        {hackathonData?.judges?.map((item, index) => (
                            <div key={index} className='grid 2xl:grid-cols-3 lg:grid-cols-5 md:grid-cols-4  w-full  gap-5 text-[#4C4C4D] ' >
                                <div className="xl:w-40 xl:h-40 h-32 w-32 2xl:col-span-1 col-span-2">
                                    <Image src={item.photo} alt="" className='rounded-[23px] w-full h-full  object-cover' width={200} height={200} />
                                </div>
                                <div className='flex flex-col break-words 2xl:col-span-2 col-span-3'>
                                    <h3 className='xl:text-[30px] lg:text-[24px] text-[16px] break-words '>{item.name}</h3>
                                    <h3 className='xl:text-[30px] lg:text-[24px] text-[16px] break-words'>{item.lastName}</h3>
                                    <p className='xl:text-[24px]  lg:text-[16px]  text-[12px] italic break-words font-light'>{item.qualification} {item.companyName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className='col-span-4 box-shadow rounded-[23px] py-8 px-3'>
                    <h3 className='xl:text-[45px] lg:text-[30px]  text-[20px] text-[#FF8500] font-normal'>JUDGING <br /> CRITERIA</h3>
                    <div className='lg:w-[90%]'>
                        <ul className='list-disc text-[#000000] xl:text-[24px] lg:text-[18px] text-[15px] lg:pl-8 pl-4 flex flex-col gap-5'>
                            {
                                hackathonData?.judging_criteria?.map((item, index) => (
                                    <li key={index} className=" font-light">{item.text}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Judges
