import { find, findOne } from '@/lib/utils';

export const fetchHero = async () => {
  try {
      const response = await find('heros');
      const hero = response.find(hero => hero.key === 'reverse');
      return hero;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const fetchReversePitch = async () => {
  try {
    const response = await findOne('hackathonresverses');
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
      return hero;
  } catch (error) {
      console.error(error);
      return null;
  }
};