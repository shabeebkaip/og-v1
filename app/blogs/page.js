import dynamic from "next/dynamic"
const Blogs = dynamic(() => import('@/app/blogs/contents/Blogs'))


const page = () => {
  return (
      <div>
        <Blogs />
      </div>
  )
}

export default page
