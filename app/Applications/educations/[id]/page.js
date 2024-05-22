import React, { Suspense } from 'react'
import EductionDetail from './contents/EductionDetail'

const page = ({ searchParams }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <EductionDetail educationId={searchParams} />
      </div>
    </Suspense>
  )
}

export default page
