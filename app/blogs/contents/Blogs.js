import { find } from '@/lib/utils';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/app/blogs/components/Hero'));
const BlogsList = dynamic(() => import('@/app/blogs/components/BlogsList'));

const fetchBlogHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'news');
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchBlogs = async () => {
  try {
    const response = await find('news');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const fetchCategories = async () => {
  try {
    const response = await find('categories');
    const categories = response.filter(category => category.key === 'news');
    return categories;
  } catch (error) {
    console.error(error);
    return null;
  }

}
const Blogs = async () => {
  const hero = await fetchBlogHero();
  const blogs = await fetchBlogs();
  const categories = await fetchCategories();
  return (
    <div className=" overflow-hidden pb-8">
      <div className="md:px-0  px-2 mx-auto">
        <Hero hero={hero} />
      </div>
      <div className="">
        <BlogsList blogs={blogs} categories={categories} />
      </div>
    </div>
  )
}

export default Blogs