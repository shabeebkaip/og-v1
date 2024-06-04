

import dynamic from 'next/dynamic';
import { fetchContactHero, fetchCommunityList, fetchCountryCode } from '@/app/contact-us/api.js'

const ContactHero = dynamic(() => import('@/app/contact-us/components/ContactHero.js'));
const Community = dynamic(() => import('@/app/contact-us/components/Community.js'));
const CommunityReverse = dynamic(() => import('@/app/contact-us/components/CommunityReverse.js'));
const StayInTouchContainer = dynamic(() => import('@/app/contact-us/components/StayInTouch.js'));




const ContactUs = async () => {
    const hero = await fetchContactHero();
    const communityList = await fetchCommunityList();
    const countryCode = await fetchCountryCode();
    const code = countryCode?.[0]?.country
    return (
        <div className='flex flex-col gap-10 mx-auto overflow-hidden '>
            <ContactHero data={hero} />
            {communityList?.map((item, index) => (
                index % 2 === 0 ? (
                    <Community key={index} mentor={item} />
                ) : (
                    <CommunityReverse key={index} mentor={item} countryCode="jdjdj" />
                )
            ))}
            
            <StayInTouchContainer countryCode={code} />
        </div>
    );
};

export default ContactUs;