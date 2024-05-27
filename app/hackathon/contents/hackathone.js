import dynamic from 'next/dynamic'
const HackathonHero = dynamic(() => import('@/app/hackathon/components/HackathonHero'))
const Rules = dynamic(() => import('@/app/hackathon/components/Rules'))
const HackathonSponser = dynamic(() => import('@/app/hackathon/components/HackathonSponser'))
const JoinHackathon = dynamic(() => import('@/app/hackathon/components/JoinHackathon'))
const Requirements = dynamic(() => import('@/app/hackathon/components/Requirements'))
const Bonus = dynamic(() => import('@/app/hackathon/components/Bonus'))
const Prize = dynamic(() => import('@/app/hackathon/components/PrizeSection'))
const Judges = dynamic(() => import('@/app/hackathon/components/Judges'))
const PrizeMobile = dynamic(() => import('@/app/hackathon/components/PrizeMobile'))
const JudgeMobile = dynamic(() => import('@/app/hackathon/components/JudgeMobile'))



import { fetchHackathon, fetchHero, fetchPageContentHacakthon } from '@/app/hackathon/api'


const Hackathon = async () => {
  const hero = await fetchHero();
  const hackathon = await fetchHackathon()
  const pageContent = await fetchPageContentHacakthon()

  return (
    <div className='pb-10'>
      <div className='container px-6 mx-auto md:px-0'>
        <HackathonHero hero={hero} />
        <Rules hackathonData={hackathon} />
      </div>
      <HackathonSponser hackathonData={hackathon} />
      <div className='container  mx-auto'>
        <JoinHackathon pageContent={pageContent}  hackathonData={hackathon} />
        <Requirements requirements={hackathon?.requirements} />
        <Bonus bonus={hackathon?.bonus} />
        <div>
          <div className='md:block lg:hidden'><PrizeMobile hackathonData={hackathon} /></div>
          <div className='lg:block hidden'><Prize hackathonData={hackathon} /></div>
          <div className='md:hidden block'><JudgeMobile hackathonData={hackathon}  /></div>
          <div className='md:block hidden'><Judges hackathonData={hackathon}  /></div>
        </div>
       

      </div>


    </div>
  )
}

export default Hackathon

