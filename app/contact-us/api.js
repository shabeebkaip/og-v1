import { find, findOne } from '@/lib/utils';

export const fetchContactHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'contact_us');
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCommunityList = async () => {
  try {
    const response = await find('communitylists');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
