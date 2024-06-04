import { find } from '@/lib/utils';
import { unstable_noStore } from 'next/cache';

export const fetchContactHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'contact_us');
    unstable_noStore();
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCommunityList = async () => {
  try {
    const response = await find('communitylists');
    unstable_noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCountryCode = async () => {
  try {
    const response = await find('countryList');
    unstable_noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
