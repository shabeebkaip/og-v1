import dynamic from "next/dynamic"
import { Suspense } from "react"
const Payment = dynamic(() => import('@/app/Applications/paymentSummary/contents/Payment'), { ssr: false })

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='container mx-auto px-6 md:px-0'>
        <Payment />
      </div>
    </Suspense>
  )
}

export default page
