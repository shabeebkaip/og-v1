

import FooterTop from '@/app/shared/components/FooterTop';
import axios from 'axios'
import { baseURL } from '@/app/constant'
import dynamic from 'next/dynamic';


import { fetchEducationHero, fetchCollaboratorList, fetchFindProgram, fetchprofTestList, fetchCourseList, fetchPageContentEducation } from '@/app/educations/api.js'

const EducationHero = dynamic(() => import('@/app/educations/components/EducationHero.js'));
const Collaborate = dynamic(() => import('@/app/educations/components/Collaborate.js'));
const CollaborateMobile = dynamic(() => import('@/app/educations/components/CollabarateMobile.jsx'));
const YourGoal = dynamic(() => import('@/app/educations/components/YourGoal.js'));
const ComingSoon = dynamic(() => import('@/app/educations/components/ComingSoon.js'));
const Professionals = dynamic(() => import('@/app/educations/components/Professionals.js'));
const MobileProffesionalSlider = dynamic(() => import('@/app/educations/components/MobileProffesionalSlider.js'));
const SupportTeam = dynamic(() => import('@/app/educations/components/SupportTeam.js'));
const Courses = dynamic(() => import('@/app/educations/components/Courses.js'));


const Educations = async () => {

  const hero = await fetchEducationHero();
  const collaborator = await fetchCollaboratorList();
  const findProgram = await fetchFindProgram();
  const profTestimonials = await fetchprofTestList();
  const courseList = await fetchCourseList();
  const pagecontent = await fetchPageContentEducation();

  return (
    <div className='flex flex-col gap-2 mx-auto pb-10 '>
      <EducationHero hero={hero} />
      <Courses courseLists={courseList} />
      <div className='hidden lg:block'>
        <Collaborate universities={collaborator} />
      </div>
      <div className='lg:hidden'>
        <CollaborateMobile universities={collaborator} />
      </div>
      <YourGoal findProgram={findProgram} />
      <ComingSoon courseList={courseList} />
      <div className="md:hidden flex">
        <MobileProffesionalSlider testimonial={profTestimonials} />
      </div>
      <div className="md:flex hidden">
        <Professionals testimonial={profTestimonials} />
      </div>
      <SupportTeam data={pagecontent} />
      {/* <FooterTop /> */}
    </div>
  );
}

export default Educations;