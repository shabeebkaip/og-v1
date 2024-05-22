
const Prize = ({hackathonData}) => {
  return (
    <div className='font-Sans px-3 '>
      <div className='text-[50px] font-medium flex flex-col justify-center items-center gap-4'>
        <h3 className='text-[#FF8500] border-2  rounded-[45px] border-[#4C4C4D] px-4'>PRIZES</h3>
        <h3 className='uppercase text-[#4C4C4D] '>{hackathonData?.prize} in prizes </h3>
      </div>
      <div className='flex flex-col gap-5 pt-[10%]'>
        <div className='grid grid-cols-10 gap-5 '>
          {hackathonData?.prizes?.map((item, index) => (
            <div key={index} className={`col-span-${index % 3 === 0 ? 2 : 4} p-6 pl-10 box-shadow`} style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
              <div className='xl:w-[80%] w-[60%]'>
                <ul className='list-disc xl:text-[26px] text-[18px]'>
                  {
                    item?.List?.map((prize, key) => (
                      <li key={key}><span className="font-normal">{item.category} {prize.heading}</span>
                        {
                          prize.prices?.map((reward, ind) => (
                            <span key={ind} className='text-[#4C4C4D] font-light'>
                              <div>
                                {reward}
                              </div>
                            </span>
                          ))
                        }
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Prize
