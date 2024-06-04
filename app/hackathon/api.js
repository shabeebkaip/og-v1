import { find, findOne } from '@/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'hackathon');
    noStore();
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchHackathon = async () => {
  try {
    const response = await findOne('hackathons');
    noStore()
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export const fetchPageContentHacakthon = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'hackathon_page');
    noStore();
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};
