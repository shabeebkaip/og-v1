
import EducationHero from '../components/EducationHero'
import Courses from '../components/Courses'
import Collaborate from '../components/Collaborate'
import CollaborateMobile from '../components/CollabarateMobile'
import YourGoal from '../components/YourGoal'
import ComingSoon from '../components/ComingSoon'
import MobileProffesionalSlider from '../components/MobileProffesionalSlider'
import Professionals from '../components/Professionals'
import SupportTeam from '../components/SupportTeam'
import FooterTop from '@/app/shared/components/FooterTop';
import axios from 'axios'
import { baseURL } from '@/app/constant'


const Educations = async () => {
  const data = await axios.get(`${baseURL}/education/courses`)
  const courseList = data.data
  const collaburate = await axios.get(`${baseURL}/education/universities`)
  const universities = collaburate.data
  const courseSummary =  await axios.get(`${baseURL}/education/findProgram`)
  const findProgram = courseSummary.data
  const professionals = await axios.get(`${baseURL}/education/testimonial`)
  const testimonial = professionals.data
  const pageContents = await axios.get(`${baseURL}/page-content?key=education`)
  return (
    <div className='flex flex-col gap-2 mx-auto pb-10 '>
      <EducationHero />
      <Courses courseLists={courseList} />
      <div className='hidden lg:block'>
        <Collaborate universities={universities} />
      </div>
      <div className='lg:hidden'>
        <CollaborateMobile universities={universities}/>
        </div>
      <YourGoal findProgram={findProgram}/>
      <ComingSoon courseList={courseList}/>
      <div className="md:hidden flex">
        <MobileProffesionalSlider testimonial={testimonial}/>
        </div>
      <div className="md:flex hidden">
        <Professionals testimonial={testimonial}/>
        </div>
      <SupportTeam pageContents={pageContents}/>
      <FooterTop />
    </div>
  );
}

export default Educations;