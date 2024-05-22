
import Hero from '../components/Hero'
import Aboutus from "../components/AboutUs"
import ZoomClass from "../components/ZoomClass"
import CourseProgram from "../components/CourseProgram"
import Organizer from "../components/Organizer"
import TakeCourse from "../components/TakeCourse"
import AskQuestion from "../components/AskQuestion"
import FooterTop from '@/app/shared/components/FooterTop';
import axios from 'axios'
import { baseURL } from '@/app/constant'


const EductionDetail = async ({ educationId }) => {
  console.log(educationId);
  const id = educationId?.id
  const educationDetailResponse = await axios.get(`${baseURL}/education/${id}`)
  const data = await educationDetailResponse.data
  return (
    <div className=' px-3 md:px-0 overflow-hidden'>
      <Hero educationDetail={data} />
      <Aboutus educationDetail={data} />
      <ZoomClass educationDetail={data} />
      <CourseProgram educationDetail={data} />
      <Organizer educationDetail={data} />
      <TakeCourse educationDetail={data} />
      <AskQuestion educationDetail={data} />
      {/* <ShareCourse /> */}
      <FooterTop />
    </div>
  )
}

export default EductionDetail
