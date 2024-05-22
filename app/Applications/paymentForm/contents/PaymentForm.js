"use client"
import { Suspense, useEffect, useState } from "react";
import PaymentNew from "../components/PaymentNew"
import { globalGetService } from "@/app/utils/apiServices";
import { useSearchParams } from 'next/navigation'


const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({})
  const params =  useSearchParams()
  const id = params.get('id')
  const ref = params.get('ref')
  useEffect(() => {
    globalGetService('get-payment-history', {id: id})
    .then(res => setPaymentData(res.data))
  }, []) 
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="container mx-auto px-6 md:px-0">
       <PaymentNew paymentData={paymentData} referenceId={ref}/>
        {/* <UpgradePlan/> */}
    </div>
    </Suspense>
  )
}

export default PaymentForm