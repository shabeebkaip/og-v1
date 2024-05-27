import Package from './Sliders'
import MobilePackageSlider from './PackageMobileSlider'
import axios from 'axios';
import { baseURL } from '@/app/constant';


const PackagePlans = ({packages}) => {
  return (
    <>
      <div>
        <div className='flex justify-center my-32 text-center'>
          <p className='xl:text-[50px] md:text-[45px] text-[30px] font-medium text-[#FF8500] border-[#4C4C4D] px-4 uppercase'>
            <span className=' border-2 border-black px-5 py-3 rounded-[45px]'>Packages Plans</span>
          </p>
        </div>
        <div>
          <div className='lg:hidden flex'><MobilePackageSlider packages={packages} /> </div>
          <div className='lg:flex hidden h-full'> <Package packages={packages} /></div>
        </div>
      </div>
    </>
  );
};

export default PackagePlans;
