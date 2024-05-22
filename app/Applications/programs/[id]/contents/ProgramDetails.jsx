import Hero from '../components/Hero'
import ApplicationProcess from '../components/ApplicationProcess'
import EligibilityCriteria from '../components/EligibilityCriteria'
import MobEligibilityCriteria from '../components/MobEligibiltyCriteria'
import ApplyNow from '../components/ApplyNow'
import FooterTop from '@/app/shared/components/FooterTop';
import axios from 'axios'
import { baseURL } from '../../../../constant'



const ProgramDetails = async ({ programId }) => {
  const id = programId?.id
  const programDetailResponse = await axios.get(`${baseURL}/programs/${id}`)
  const programDetails = await programDetailResponse.data
  const pageContentResponse = await axios.get(`${baseURL}/page-content?key=program`)
  const pageContentProgram = await pageContentResponse.data

  return (

    <div className='overflow-hidden relative'>
      {programDetails && <Hero programDetail={programDetails} />}
      {programDetails && <ApplicationProcess programDetail={programDetails} />}
      <div className='hidden md:block'>
        {programDetails && <EligibilityCriteria programDetail={programDetails} />}
      </div>
      <div className='md:hidden'>
        {programDetails && <MobEligibilityCriteria programDetail={programDetails} />}
      </div>
      {pageContentProgram && <ApplyNow pageContent1={pageContentProgram} />}
      <div className='mt-4'> 
        {programDetails && <FooterTop />}

      </div>
    </div>
  )
}

export default ProgramDetails