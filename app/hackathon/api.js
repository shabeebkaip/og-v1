import { find, findOne } from '@/lib/utils';

export const fetchHero = async () => {
  try {
      const response = await find('heros');
      const hero = response.find(hero => hero.key === 'hackathon');
      return hero;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const fetchHackathon = async () => {
  try {
    const response = await findOne('hackathons');
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
      return hero;
  } catch (error) {
      console.error(error);
      return null;
  }
};
