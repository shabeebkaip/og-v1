import React, { Suspense } from 'react'
import ReversePitch from './contents/ReversePitch'

const page = () => {
    return (
        <Suspense fallback={<div>Loading....</div>} >
            <div>
                <ReversePitch />
            </div>
        </Suspense>

    )
}

export default page