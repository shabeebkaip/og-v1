
// import React from 'react'
import Hero from '../components/Hero'
import PackagePlans from '../components/PackagePlans'
import Terms_conditions from '../components/Terms_conditions'
import Continue from '../components/Continue'
import FooterTop from '@/app/shared/components/FooterTop';
import { find } from '@/lib/utils';

const fetchHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'package');
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchPackages = async () => {
  try {
    const response = await find('packages');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Packages = async () => {
  const hero = await fetchHero();
  const packages = await fetchPackages();
  return (
    <div className='container  mx-auto overflow-hidden md:px-0'>
      <Hero hero={hero} />
      <PackagePlans packages={packages}  />
      <Terms_conditions />
      <Continue />
    </div>
  )
}

export default Packages
