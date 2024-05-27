import dynamic from "next/dynamic"
const Payment = dynamic(() => import('@/app/payment-summary/contents/Payment'))

const page = () => {
  return (
    <div className='container mx-auto px-6 md:px-0'>
      <Payment />
    </div>

  )
}

export default page
