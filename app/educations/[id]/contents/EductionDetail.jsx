import dynamic from 'next/dynamic'
import { fetchCourseDetails, fetchPageContentEducation, } from '@/app/educations/api'


const Hero = dynamic(() => import('@/app/educations/[id]/components/Hero'))
const AboutUs = dynamic(() => import('@/app/educations/[id]/components/AboutUs'))
const ZoomClass = dynamic(() => import('@/app/educations/[id]/components/ZoomClass'))
const CourseProgram = dynamic(() => import('@/app/educations/[id]/components/CourseProgram'))
const Organizer = dynamic(() => import('@/app/educations/[id]/components/Organizer'))
const TakeCourse = dynamic(() => import('@/app/educations/[id]/components/TakeCourse'))
const AskQuestion = dynamic(() => import('@/app/educations/[id]/components/AskQuestion'))


const EductionDetail = async ({ educationId }) => {
  const data = await fetchCourseDetails(educationId)
  const pagecontent = await fetchPageContentEducation();

  return (
    <div className=' px-3 md:px-0 overflow-hidden'>
      <Hero educationDetail={data} educationId={educationId} />
      <AboutUs educationDetail={data} />
      <ZoomClass educationDetail={data} pageContent={pagecontent}/>

      <CourseProgram educationDetail={data} />
      {data?.organizerName ? <Organizer educationDetail={data} /> : null}
      {data?.summaryHeading ? <TakeCourse educationDetail={data} /> : null}
      {data?.faq?.length ? <AskQuestion educationDetail={data} /> : null}
      {/* <ShareCourse /> */}
      {/* <FooterTop /> */}
    </div>
  )
}

export default EductionDetail
