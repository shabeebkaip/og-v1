import React, { Suspense } from 'react'
import Packages from './contents/package'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Packages />
      </div>
    </Suspense>
  )
}

export default page
