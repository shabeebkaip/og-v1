import dynamic from 'next/dynamic'
const HackathonHero = dynamic(() => import('@/app/Applications/hackathone/components/HackathonHero'))
const Rules = dynamic(() => import('@/app/Applications/hackathone/components/Rules'))
const HackathonSponser = dynamic(() => import('@/app/Applications/hackathone/components/HackathonSponser'))
const JoinHackathon = dynamic(() => import('@/app/Applications/hackathone/components/JoinHackathon'))
const Requirements = dynamic(() => import('@/app/Applications/hackathone/components/Requirements'))
const Bonus = dynamic(() => import('@/app/Applications/hackathone/components/Bonus'))
const Prize = dynamic(() => import('@/app/Applications/hackathone/components/PrizeSection'))
const Judges = dynamic(() => import('@/app/Applications/hackathone/components/Judges'))
const PrizeMobile = dynamic(() => import('@/app/Applications/hackathone/components/PrizeMobile'))
const JudgeMobile = dynamic(() => import('@/app/Applications/hackathone/components/JudgeMobile'))



import FooterTop from '@/app/shared/components/FooterTop';
import axios from 'axios'
import { baseURL } from '@/app/constant'

const Hackathon = async () => {
  const hackathonData = await axios.get(`${baseURL}/hackathon`)
  const hackathon = hackathonData.data
  const pageContents = await axios.get(`${baseURL}/hero?key=hackathon_page`)
  const pageContent = pageContents.data
  return (
    <div className='pb-10'>
      <div className='container px-6 mx-auto md:px-0'>
        <HackathonHero />
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
        <div className=' mt-12'>
          <FooterTop />
        </div>

      </div>


    </div>
  )
}

export default Hackathon

