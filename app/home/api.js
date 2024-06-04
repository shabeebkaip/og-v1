import { find, findOne } from '@/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchHero = async () => {
  try {
    const response = await find('heros');
    noStore();
    const hero = response.find(hero => hero.key === 'home');

    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchAboutUs = async () => {
  try {
    const response = await findOne('abouts');
    noStore()
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchPageContentHome = async () => {
  try {
    const response = await find('pagecontents');
    const pageContentHome = response.find(pageContent => pageContent.key === 'home');
    noStore();
    return pageContentHome;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchPageContentHub = async () => {
  try {
    const response = await find('pagecontents');
    const pageContentHome = response.find(pageContent => pageContent.key === 'program');
    noStore();
    return pageContentHome;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchServices = async () => {
  try {
    const response = await find('homefeatures');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchPrograms = async () => {
  try {
    const response = await find('programs');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchEducationCourses = async () => {
  try {
    const response = await find('courses');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchHackathon = async () => {
  try {
    const response = await findOne('hackathons');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchOurCommunity = async () => {
  try {
    const response = await findOne('communities');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchCommunityList = async () => {
  try {
    const response = await find('communitylists');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchTestimonials = async () => {
  try {
    const response = await find('testimonials');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

