import { baseURL } from '@/app/constant';
import { fetchProgramHero, fetchPrograms } from '@/app/programs/api';
import dynamic from 'next/dynamic';

const ProgramHero = dynamic(() => import('@/app/programs/components/ProgramHero'))
const Mob_Program = dynamic(() => import('@/app/programs/components/Mob_Program'))
const OrangeGradient = dynamic(() => import('@/app/shared/components/OrangeGradient'))
const ProgramList = dynamic(() => import('@/app/programs/components/ProgramList'))
const BlueGradient = dynamic(() => import('@/app/shared/components/BlueGradient'))


const ProgramsContents = async () => {
    const hero = await fetchProgramHero();
    const program = await fetchPrograms();
    return (
        <>
            <div className="relative px-6 md:px-0 overflow-hidden sm:pb-[80px] pb-8 ">
                <div className="container mx-auto">
                    <div className='lg:hidden flex'>
                        <Mob_Program data={hero} />
                    </div>
                    <div className='hidden lg:flex'>
                        <ProgramHero data={hero} />
                    </div>
                </div>
                {program && <div className="w-[40%] h-[7%] absolute right-0 md:block hidden "><OrangeGradient /></div>}
                <div className="container mx-auto">
                    <ProgramList program={program} />
                </div>
                {program &&
                    <div className="md:w-[30%] h-[7%] absolute  left-0 top-[36%] z-[-1] md:block hidden "><OrangeGradient /></div>
                }
                <div className="w-[40%] h-[7%] absolute right-0 md:block hidden "><OrangeGradient /></div>
                {/* <div className="container mx-auto">
                    {program && <ProgramList program={program} />}
                </div> */}
                <div className="md:w-[30%] h-[7%] absolute  left-0 top-[36%] z-[-1] md:block hidden "><OrangeGradient /></div>

                <div className="absolute md:w-[40%] h-[7%] bottom-[10%] right-0 z-[-1] md:block hidden"><BlueGradient /></div>
            </div>
        </>
    );
}

export default ProgramsContents;