
import React, { Suspense } from 'react'
import ProgramDetails from './contents/ProgramDetails'

const Page = ({ searchParams }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div><ProgramDetails programId={searchParams} /></div>
    </  Suspense>
  )
}

export default Page