import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '@/app/Loading';
import { fetchHero, fetchAboutUs, fetchPageContentHome, fetchServices, fetchPrograms, fetchEducationCourses, fetchHackathon, fetchOurCommunity, fetchCommunityList, fetchTestimonials } from '@/app/home/api';

const HomeHero = dynamic(() => import('@/app/home/components/HomeHero'), { ssr: true });
const AboutUs = dynamic(() => import('@/app/home/components/AboutUs'), { ssr: true });
const Services = dynamic(() => import('@/app/home/components/Services'), { ssr: true });
const OrangeGradientLeft = dynamic(() => import('@/app/shared/components/OrangeGradientLeft'), { ssr: true });
const ProgramList = dynamic(() => import('@/app/home/components/ProgramList'), { ssr: true });
const Community = dynamic(() => import('@/app/home/components/Community'), { ssr: true });
const CommunityList = dynamic(() => import('@/app/home/components/CommunityList'), { ssr: true });
const ProgramHub = dynamic(() => import('@/app/home/components/ProgramHub'), { ssr: true });
const Testimonial = dynamic(() => import('@/app/home/components/Testimonial'), { ssr: true });
const JoinHub = dynamic(() => import('@/app/home/components/JoinHub'), { ssr: true });



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
    console.log('hero', hero);
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
