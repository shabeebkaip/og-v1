import React, { Suspense } from 'react'
import NewsDetails from './contents/NewsDetails'

const page = ({searchParams}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
        <NewsDetails newsId={searchParams}/>
    </div>
    </Suspense>
  )
}

export default page