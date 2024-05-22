// import { SnackbarProvider } from 'notistack'
import { Suspense } from 'react'
import Hackathon from './contents/hackathone'
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Hackathon />
      </div>
    </Suspense>
  )
}

export default page
