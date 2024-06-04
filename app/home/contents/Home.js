import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '@/app/Loading';
import {
  fetchHero,
  fetchAboutUs,
  fetchPageContentHome,
  fetchServices,
  fetchPrograms,
  fetchEducationCourses,
  fetchHackathon,
  fetchOurCommunity,
  fetchCommunityList,
  fetchTestimonials,
  fetchPageContentHub,
} from '@/app/home/api';

import {fetchReversePitch} from '../../reverse-pitch/api';

const HomeHero = dynamic(() => import('@/app/home/components/HomeHero'), { ssr: true, loading: () => <Loading /> });
const AboutUs = dynamic(() => import('@/app/home/components/AboutUs'), { ssr: true });
const Services = dynamic(() => import('@/app/home/components/Services'), { ssr: true });
const OrangeGradientLeft = dynamic(() => import('@/app/shared/components/OrangeGradientLeft'), { ssr: true });
const ProgramList = dynamic(() => import('@/app/home/components/ProgramList'), { ssr: true });
const Community = dynamic(() => import('@/app/home/components/Community'), { ssr: true });
const CommunityList = dynamic(() => import('@/app/home/components/CommunityList'), { ssr: true });
const ProgramHub = dynamic(() => import('@/app/home/components/ProgramHub'), { ssr: true });
const Testimonial = dynamic(() => import('@/app/home/components/Testimonial'), { ssr: true });
const JoinHub = dynamic(() => import('@/app/home/components/JoinHub'), { ssr: true });

const MainHome = async ({ req }) => {
  // Fetch data on the server using the request context (`req`)
  const hero = await fetchHero(req);
  const aboutus = await fetchAboutUs(req);
  const pageContentHome = await fetchPageContentHome(req);
  const pageContentHub = await fetchPageContentHub(req)
  const services = await fetchServices(req);
  const programs = await fetchPrograms(req);
  const courses = await fetchEducationCourses(req);
  const hackathon = await fetchHackathon(req);
  const ourCommunity = await fetchOurCommunity(req);
  const communityList = await fetchCommunityList(req);
  const testimonials = await fetchTestimonials(req);
  const reversePitch = await fetchReversePitch(req);


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
          <ProgramList programs={programs} hackathon={hackathon} courses={courses} reversePitch={reversePitch}/>
          <Community ourCommunity={ourCommunity} />
          <CommunityList communityList={communityList} pageContent={pageContentHome} />
          <ProgramHub programs={programs} pageContent={pageContentHub} />
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