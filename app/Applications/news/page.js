import { Suspense } from "react"
import News from "./contents/News"

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <News />
      </div>
    </Suspense>
  )
}

export default page
