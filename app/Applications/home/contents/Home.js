

import dynamic from 'next/dynamic';
const HomeHero = dynamic(() => import('@/app/Applications/home/components/HomeHero'));
const AboutUs = dynamic(() => import('@/app/Applications/home/components/AboutUs'));
const Services = dynamic(() => import('@/app/Applications/home/components/Services'));
const OrangeGradientLeft = dynamic(() => import('@/app/shared/components/OrangeGradientLeft'));
const ProgramList = dynamic(() => import('@/app/Applications/home/components/ProgramList'));
const Community = dynamic(() => import('@/app/Applications/home/components/Community'));
const CommunityList = dynamic(() => import('@/app/Applications/home/components/CommunityList'));
const ProgramHub = dynamic(() => import('@/app/Applications/home/components/ProgramHub'));
const Testimonial = dynamic(() => import('@/app/Applications/home/components/Testimonial'));
import { Suspense } from 'react';



const MainHome = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='relative  md:p-0 px-3 bg-white overflow-hidden'>
                <div className='container  mx-auto md:px-0 '>
                    <HomeHero />
                    <AboutUs />
                </div>
                <div className='container mx-auto mt-20 md:px-0 '>
                    {<Services />}
                </div>
                <div className='container relative px-3 mx-auto md:px-0 '>
                    <div className='absolute top-[84px] right-0 h-[300px] w-[500px] block md:hidden z-[-1]'><OrangeGradientLeft /></div>
                    <ProgramList />
                    <Community />
                    {<CommunityList />}
                    {<ProgramHub />}
                </div>
                <Testimonial />
                <div className='container px-3 mx-auto md:px-0 '>
                    {/* {pageContentHome && <JoinHub pageContent={pageContentHome[0]} />} */}
                </div>
                {/* {hero &&
                <FooterTop />
            } */}
            </div>
        </Suspense>
    );
}


export default MainHome;