import dynamic from 'next/dynamic'
import { fetchProgramDetails, fetchProgramPageContent } from '@/app/programs/api'
const Hero = dynamic(() => import('@/app/programs/[id]/components/Hero'))
const ApplicationProcess = dynamic(() => import('@/app/programs/[id]/components/ApplicationProcess'))
const EligibilityCriteria = dynamic(() => import('@/app/programs/[id]/components/EligibilityCriteria'))
const MobEligibilityCriteria = dynamic(() => import('@/app/programs/[id]/components/MobEligibiltyCriteria'))
const ApplyNow = dynamic(() => import('@/app/programs/[id]/components/ApplyNow'))

const ProgramDetails = async ({ programId }) => {
  const programDetails = await fetchProgramDetails(programId)
  const pageContentProgram = await fetchProgramPageContent()

  


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
      {pageContentProgram && <ApplyNow pageContent1={pageContentProgram} programDetail={programDetails} />}

      {/* {programEndDate < currentDate && pageContentProgram && (
                <ApplyNow pageContent1={pageContentProgram} programDetail={programDetails} />
      )} */}
      
    </div>
  )
}

export default ProgramDetails