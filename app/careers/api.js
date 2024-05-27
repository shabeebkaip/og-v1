import { find, findOne } from '@/lib/utils';

export const fetchCareerHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'career');
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchJoinUs = async () => {
  try {
    const response = await findOne('globalhubs');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export const fetchExplore = async () => {
  try {
    const response = await findOne('explorebeyonds');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchGlobalHub = async () => {
  try {
    const response = await find('pagecontents');
    const global = response.find(global => global.key === 'career');
    return global;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCareerList = async () => {
  try {
    const response = await find('careerlists');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};



