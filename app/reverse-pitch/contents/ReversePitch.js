import React from 'react'
import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/app/reverse-pitch/components/Hero'))
const Event = dynamic(() => import('@/app/reverse-pitch/components/Event'))
const ReverseSponser = dynamic(() => import('@/app/reverse-pitch/components/ReverseSponsor'))
const PageContent = dynamic(() => import('@/app/reverse-pitch/components/PageContent'))
const Requirements = dynamic(() => import('@/app/reverse-pitch/components/Requirements'))
const PrizeMobile = dynamic(() => import('@/app/reverse-pitch/components/PrizeMobile'))
const Prize = dynamic(() => import('@/app/reverse-pitch/components/Prize'))
const JudgeMobile = dynamic(() => import('@/app/reverse-pitch/components/JudgeMobile'))
const Judges = dynamic(() => import('@/app/reverse-pitch/components/Judges'))
import { fetchHero, fetchPageContentReversePitch, fetchReversePitch } from '@/app/reverse-pitch/api';




const ReversePitch = async () => {
    const hero = await fetchHero()
    const reversePitch = await fetchReversePitch()
    const pageContent = await fetchPageContentReversePitch()
    return (
        <div className='pb-10'>
            <div className='container px-6 mx-auto md:px-0'>
                <Hero hero={hero} />
                <Event reversePitch={reversePitch} />
            </div>
            <ReverseSponser reverse={reversePitch} />

            <div className='container  mx-auto'>
                <PageContent pageContent={pageContent} reverse={reversePitch} />
                <Requirements requirements={reversePitch?.requirements} />

                <div>
                    <div className='md:block lg:hidden'><PrizeMobile reversePitch={reversePitch} /></div>
                    <div className='lg:block hidden'><Prize reversePitch={reversePitch} /></div>
                    <div className='md:hidden block'><JudgeMobile reverse={reversePitch} /></div>
                    <div className='md:block hidden'><Judges reverse={reversePitch} /></div>


                </div>


            </div>


        </div>
    )
}

export default ReversePitch