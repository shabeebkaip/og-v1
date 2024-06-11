import { find } from '@/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';
import { json } from 'stream/consumers';

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

        // return hero;
        return JSON.parse(JSON.stringify(hero));

    } catch (error) {
        console.error('Error fetching hero:', error);
        return null;
    }
};


export const fetchBlogs = async () => {
    try {
        const response = await find('news');
        noStore();  // Ensuring noStore is called to prevent caching
        if (!response) {
            console.error('No response from find("news")');
            return [];
        }

        // return response;
        return JSON.parse(JSON.stringify(response));

    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
};

export const fetchCategories = async () => {
    try {
        const response = await find('categories');
        noStore();  // Ensuring noStore is called to prevent caching
        if (!response) {
            console.error('No response from find("categories")');
            return [];
        }
        const categories = response.filter(category => category.key === 'news');
        // return categories;
        return JSON.parse(JSON.stringify(categories));
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};