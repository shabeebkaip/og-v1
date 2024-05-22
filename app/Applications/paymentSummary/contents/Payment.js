

import UpgradePlan from "../components/UpgradePlan"
import PaymentSummary from "../components/PaymentSummary"
import { Suspense } from "react"

const Payment = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="">
     <PaymentSummary/>
    </div>
    </Suspense>
  )
}

export default Payment
