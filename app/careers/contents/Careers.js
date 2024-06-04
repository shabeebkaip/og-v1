import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '@/app/Loading';
import { fetchCareerHero, fetchJoinUs, fetchExplore, fetchGlobalHub, fetchCareerList } from '@/app/careers/api.js'

const HeroCarrier = dynamic(() => import('@/app/careers/components/HeroCarrier.jsx'));
const Joinus = dynamic(() => import('@/app/careers/components/Joinus.jsx'));
const Teamlist = dynamic(() => import('@/app/careers/components/Teamlist.jsx'));
const Explore = dynamic(() => import('@/app/careers/components/Explore.jsx'));
const GlobalHub = dynamic(() => import('@/app/careers/components/GlobalHub.jsx'));

const Careers = async () => {

  const hero = await fetchCareerHero();
  const joinus = await fetchJoinUs();
  const global = await fetchGlobalHub();
  const explore = await fetchExplore();
  const careerList = await fetchCareerList();
  return (
    <Suspense fallback={<Loading />}>
      <div className=" overflow-hidden pb-8">
        <div className="container md:px-0  px-4 mx-auto">
          <HeroCarrier data={hero}/>
        </div>
        <div className="md:px-0 px-4 container mx-auto">
          <Joinus data={joinus} />
        </div>
        <div className=" ">
          <Teamlist data ={careerList}/>
        </div>
        <div className=" px-4 container mx-auto">
          <Explore data={explore} />
          <GlobalHub data={global} />
        </div>
      </div>
    </Suspense>
  );
};

export default Careers;
