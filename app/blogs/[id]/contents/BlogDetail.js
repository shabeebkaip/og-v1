import BlueGradientRight from '@/app/shared/components/BlueGradientRight';
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft';
import BlogContents from '@/app/blogs/[id]/components/BlogContents';
import { find } from '@/lib/utils';

export const fetchBlogDetail = async (id) => {
  try {
    const response = await find('news');
    const blogs = response.find(news => id === news._id.toString());
    if (blogs) {
      return blogs;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
const BlogDetail = async ({ newsId }) => {
  const blogDetail = await fetchBlogDetail(newsId)
  return (
    <div className="w-full overflow-hidden pb-10 ">
      <div className="absolute md:w-[200px] w-[100px] md:h-[300px] h-[200px]  right-0 top-10  lg:hidden">
        <OrangeGradientLeft className="" />
      </div>
      <div className="absolute md:w-[200px] w-[100px] md:h-[300px] h-[200px] left-0 top-[210px]  lg:hidden  ">
        <BlueGradientRight />
      </div>
      <div>

        <BlogContents blogDetail={blogDetail} />
        <div className='mt-20 '>
          {/* <News /> */}
        </div>
      </div>
    </div>
  )
}

export default BlogDetail