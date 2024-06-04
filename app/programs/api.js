import { find } from '@/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchProgramHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'program');
    noStore();
    if (hero) {
      return JSON.parse(JSON.stringify(hero));
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchPrograms = async () => {
  try {
    const response = await find('programs');
    noStore();
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchProgramDetails = async (id) => {

  try {
    const response = await find('programs');
    const program = response.find(program => id === program._id.toString());
    // noStore();
    if (program) {
      return JSON.parse(JSON.stringify(program));
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchProgramPageContent = async () => {
  try {
    const response = await find('pagecontents');
    const pageContent = response.find(pageContent => pageContent.key === 'program');
    noStore();
    if (pageContent) {
      return JSON.parse(JSON.stringify(pageContent));
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}