import React, { Suspense } from 'react'
import EductionDetail from '@/app/educations/[id]/contents/EductionDetail'

const page = ({ params }) => {
  return (
    <div>
      <EductionDetail educationId={params.id} />
    </div>

  )
}

export default page
