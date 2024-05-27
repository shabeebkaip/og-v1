import { find, findOne } from '@/lib/utils';
export const fetchHero = async () => {
  try {
    const response = await find('heros');
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
    return pageContentHome;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchServices = async () => {
  try {
    const response = await find('homefeatures');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchPrograms = async () => {
  try {
    const response = await find('programs');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchEducationCourses = async () => {
  try {
    const response = await find('courses');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchHackathon = async () => {
  try {
    const response = await findOne('hackathons');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchOurCommunity = async () => {
  try {
    const response = await findOne('communities');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export const fetchCommunityList = async () => {
  try {
    const response = await find('communitylists');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchTestimonials = async () => {
  try {
    const response = await find('testimonials');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}