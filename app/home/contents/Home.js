import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '@/app/Loading';
import { fetchHero, fetchAboutUs, fetchPageContentHome, fetchServices, fetchPrograms, fetchEducationCourses, fetchHackathon, fetchOurCommunity, fetchCommunityList, fetchTestimonials } from '@/app/home/api';

const HomeHero = dynamic(() => import('@/app/home/components/HomeHero'));
const AboutUs = dynamic(() => import('@/app/home/components/AboutUs'));
const Services = dynamic(() => import('@/app/home/components/Services'));
const OrangeGradientLeft = dynamic(() => import('@/app/shared/components/OrangeGradientLeft'));
const ProgramList = dynamic(() => import('@/app/home/components/ProgramList'));
const Community = dynamic(() => import('@/app/home/components/Community'));
const CommunityList = dynamic(() => import('@/app/home/components/CommunityList'));
const ProgramHub = dynamic(() => import('@/app/home/components/ProgramHub'));
const Testimonial = dynamic(() => import('@/app/home/components/Testimonial'));
const JoinHub = dynamic(() => import('@/app/home/components/JoinHub'));



const MainHome = async () => {
    const hero = await fetchHero();
    const aboutus = await fetchAboutUs();
    const pageContentHome = await fetchPageContentHome();
    const services = await fetchServices();
    const programs = await fetchPrograms();
    const courses = await fetchEducationCourses();
    const hackathon = await fetchHackathon();
    const ourCommunity = await fetchOurCommunity();
    const communityList = await fetchCommunityList();
    const testimonials = await fetchTestimonials();

    return (
        <Suspense fallback={<Loading />}>
            <div className='relative md:p-0 px-3 bg-white overflow-hidden'>
                <div className='container mx-auto md:px-0'>
                    {hero && <HomeHero data={hero} />}
                    <AboutUs aboutus={aboutus} />
                </div>
                <div className='container mx-auto mt-20 md:px-0'>
                    <Services services={services} pageContent={pageContentHome} />
                </div>
                <div className='container relative px-3 mx-auto md:px-0'>
                    <div className='absolute top-[84px] right-0 h-[300px] w-[500px] block md:hidden z-[-1]'>
                        <OrangeGradientLeft />
                    </div>
                    <ProgramList programs={programs} hackathon={hackathon} courses={courses} />
                    <Community ourCommunity={ourCommunity} />
                    <CommunityList communityList={communityList} pageContent={pageContentHome} />
                    <ProgramHub programs={programs} pageContent={pageContentHome}  />
                </div>
                <Testimonial testimonials={testimonials} />
                <div className='container px-3 mx-auto md:px-0'>
                    {pageContentHome && <JoinHub pageContent={pageContentHome} />}
                </div>
        
            </div>
        </Suspense>
    );
};

export default MainHome;
