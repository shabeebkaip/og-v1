import dynamic from "next/dynamic"
const BlogDetail = dynamic(() => import('@/app/blogs/[id]/contents/BlogDetail'))

const page = (props) => {
  return (
    <div>
      <BlogDetail newsId={props.params.id} />
    </div>
  )
}

export default page