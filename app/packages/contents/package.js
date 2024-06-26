
import Hero from '../components/Hero'
import PackagePlans from '../components/PackagePlans'
import Terms_conditions from '../components/Terms_conditions'
import Continue from '../components/Continue'
import { find } from '@/lib/utils';
import { unstable_noStore } from 'next/cache';
import { URLSearchParams } from 'url';
import Wrapper from '../components/Wrapper';


const fetchHero = async () => {
  try {
    const response = await find('heros');
    const hero = response.find(hero => hero.key === 'package');
    unstable_noStore();
    // return hero;

    return JSON.parse(JSON.stringify(hero));

  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchPackages = async (query) => {
    
  console.log(query ,"lll");
  try {
    const response = await find('packages', query);
    console.log(response ,"lll");
    unstable_noStore(); 
    let data 
 
        data = JSON.parse(JSON.stringify(response));
    
    
     return data;

  } catch (error) {
    console.error(error);
    return null;
  }
};


const Packages = async ({query}) => {
  const hero = await fetchHero();
  const packages = await fetchPackages(query&&{'program.name':query});
  console.log(query,"kkkk");
  
  return (
    <div className='container  mx-auto overflow-hidden md:px-0'>
      <Hero hero={hero} />
      <Wrapper  packages={packages} />
      
    </div>
  )
}

export default Packages
