import { Suspense } from "react"
import PaymentForm from "./contents/PaymentForm"


const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
        <PaymentForm/>
    </div>
    </Suspense>
  )
}

export default page