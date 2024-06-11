import { find, findOne } from '@/lib/utils';
import { unstable_noStore } from 'next/cache';

export const fetchCareerHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'career');
    unstable_noStore();
    // return hero;
    return JSON.parse(JSON.stringify(hero));

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchJoinUs = async () => {
  try {
    const response = await findOne('globalhubs');
    unstable_noStore();
    // return response;
    return JSON.parse(JSON.stringify(response));
    
  } catch (error) {
    console.error(error);
    return null;
  }
}


export const fetchExplore = async () => {
  try {
    const response = await findOne('explorebeyonds');
    unstable_noStore();
    // return response;
    return JSON.parse(JSON.stringify(response));

  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchGlobalHub = async () => {
  try {
    const response = await find('pagecontents');
    const global = response.find(global => global.key === 'career');
    // return global;
    return JSON.parse(JSON.stringify(global))
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCareerList = async () => {
  try {
    const response = await find('careerlists');
    // return response;
    return JSON.parse(JSON.stringify(response));

  } catch (error) {
    console.error(error);
    return null;
  }
};



