import { find } from '@/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/app/blogs/components/Hero'));
const BlogsList = dynamic(() => import('@/app/blogs/components/BlogsList'));

const fetchBlogHero = async () => {
  try {
    const response = await find('heros');
    noStore();  // Ensuring noStore is called to prevent caching
    if (!response) {
      console.error('No response from find("heros")');
      return null;
    }

    const hero = response.find(hero => hero.key === 'news');
    if (!hero) {
      console.error('No hero found with key "news"');
      return null;
    }

    return hero;
  } catch (error) {
    console.error('Error fetching hero:', error);
    return null;
  }
};

const fetchBlogs = async () => {
  try {
    const response = await find('news');
    noStore();  // Ensuring noStore is called to prevent caching
    if (!response) {
      console.error('No response from find("news")');
      return [];
    }

    return response;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

const fetchCategories = async () => {
  try {
    const response = await find('categories');
    noStore();  // Ensuring noStore is called to prevent caching
    if (!response) {
      console.error('No response from find("categories")');
      return [];
    }

    const categories = response.filter(category => category.key === 'news');
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
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