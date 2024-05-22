import { Suspense } from "react"
import Profile from "./contents/profile"

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Profile />
      </div>
    </Suspense>
  )
}

export default page
