import { find, findOne } from '@/lib/utils';
import { unstable_noStore } from 'next/cache';

export const fetchHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'reverse');
    unstable_noStore();
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchReversePitch = async () => {
  try {
    const response = await findOne('hackathonresverses');
    unstable_noStore();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export const fetchPageContentReversePitch = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'reverse_page');
    unstable_noStore();
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};