import React from 'react'
import Hero from '../components/Hero'
import Event from '../components/Event'
import ReverseSponser from '../components/ReverseSponsor'
import PageContent from '../components/PageContent'
import Requirements from '../components/Requirements'
import PrizeMobile from '../components/PrizeMobile'
import Prize from '../components/Prize'
import JudgeMobile from '../components/JudgeMobile'
import Judges from '../components/Judges'
import FooterTop from '@/app/shared/components/FooterTop';
import axios from 'axios'
import { baseURL } from '../../../constant'


const ReversePitch = async () => {
    const data = await axios.get(`${baseURL}/reverse-pitch`)
    const reversePitch = data.data
    const pageContents = await axios.get(`${baseURL}/hero?key=reverse_page`)
    const pageContent = pageContents.data
   
    return (
        <div className='pb-10'>
            <div className='container px-6 mx-auto md:px-0'>
                <Hero />
                <Event reversePitch={reversePitch} />
            </div>
            <ReverseSponser reverse={reversePitch} />

            <div className='container  mx-auto'>
                <PageContent pageContent={pageContent} />
                <Requirements requirements={reversePitch?.requirements} />

                <div>
                    <div className='md:block lg:hidden'><PrizeMobile reversePitch={reversePitch}  /></div>
                    <div className='lg:block hidden'><Prize reversePitch={reversePitch} /></div>
                    <div className='md:hidden block'><JudgeMobile reverse={reversePitch}  /></div>
                    <div className='md:block hidden'><Judges reverse={reversePitch}  /></div>
                    <div className='mt-12'>
                        <FooterTop />
                    </div>

                </div>


            </div>


        </div>
    )
}

export default ReversePitch