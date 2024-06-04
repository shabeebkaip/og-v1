import dynamic from 'next/dynamic'
import { fetchCourseDetails, } from '@/app/educations/api'


const Hero = dynamic(() => import('@/app/educations/[id]/components/Hero'))
const AboutUs = dynamic(() => import('@/app/educations/[id]/components/AboutUs'))
const ZoomClass = dynamic(() => import('@/app/educations/[id]/components/ZoomClass'))
const CourseProgram = dynamic(() => import('@/app/educations/[id]/components/CourseProgram'))
const Organizer = dynamic(() => import('@/app/educations/[id]/components/Organizer'))
const TakeCourse = dynamic(() => import('@/app/educations/[id]/components/TakeCourse'))
const AskQuestion = dynamic(() => import('@/app/educations/[id]/components/AskQuestion'))


const EductionDetail = async ({ educationId }) => {
  const data = await fetchCourseDetails(educationId)
  return (
    <div className=' px-3 md:px-0 overflow-hidden'>
      <Hero educationDetail={data} />
      <AboutUs educationDetail={data} />
      <ZoomClass educationDetail={data} />
      <CourseProgram educationDetail={data} />
      <Organizer educationDetail={data} />
      <TakeCourse educationDetail={data} />
      <AskQuestion educationDetail={data} />
      {/* <ShareCourse /> */}
      {/* <FooterTop /> */}
    </div>
  )
}

export default EductionDetail
