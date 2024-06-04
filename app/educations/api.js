import { find, findOne } from '@/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchEducationHero = async () => {
  try {
    noStore();
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'education');
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCourseList = async () => {
  try {
    noStore();
    const response = await find('courses');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCourseDetails = async (id) => {
  try {
    const response = await find('courses');
    const course = response.find(course => id === course._id.toString());
    if (course) {
      return JSON.parse(JSON.stringify(course));
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchCollaboratorList = async () => {
  try {
    noStore();
    const response = await find('universities');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fetchFindProgram = async () => {
  try {
    const response = await findOne('find programmes');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const fetchprofTestList = async () => {
  try {
    const response = await find('graducatedtestimonials');
    noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchPageContentEducation = async () => {
  try {
    const response = await find('pagecontents');
    const hero = response.find(hero => hero.key === 'education');
    noStore();
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};
