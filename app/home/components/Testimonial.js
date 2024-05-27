// import { useMediaQuery } from "react-responsive";
import axios from 'axios';
import MobileTestimonial from '../components/MobileTestimonial';
import TestimonialSwiper from './TestimonialSwiper';
import { baseURL } from '@/app/constant';


const Testimonial = ({testimonials}) => {

    return (
        <div className='w-full mt-28 '>
            <div className='flex justify-center w-full'>
                <h3 className=' uppercase font-medium md:text-[50px] sm:text-[30px] text-[25px] border-2 rounded-[43px] border-[#FF8500] px-3  '>Our testimonials</h3>
            </div>
            <div className=' w-full bg-[#EFEFEF]  flex  py-10 flex-col mt-20 gap-20'>
                <div className='flex justify-center w-full '>
                    <h3 className=' text-center text-[#4C4C4D] sm:text-[36px] text-[25px] w-[70%] '>Discover what our satisfied collaborators have to say about their experiences working with Og Hub. </h3>
                </div>
                <div className="md:hidden flex">
                    <MobileTestimonial testimonials={testimonials} />
                </div>
                <div className='hidden md:flex'>
                    <TestimonialSwiper testimonials={testimonials} />
                </div>
            </div>
        </div>
    )
}

export default Testimonial