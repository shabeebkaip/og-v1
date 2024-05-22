import dynamic from 'next/dynamic'

const ContactHero = dynamic(() => import('@/app/Applications/contactUs/components/ContactHero'))
const StayInTouchContainer = dynamic(() => import('@/app/Applications/contactUs/components/StayInTouch'))
const Community = dynamic(() => import('@/app/Applications/contactUs/components/Community'))
const CommunityReverse = dynamic(() => import('@/app/Applications/contactUs/components/CommunityReverse'))
const FooterTop = dynamic(() => import('@/app/shared/components/FooterTop'))

import axios from 'axios';
import { baseURL } from '@/app/constant';

const fetchData = async (path, params = {}) => {
    try {
        const response = await axios.get(path, { params })
        return response.data
    } catch (err) {
        return err
    }
}


const ContactUs = async () => {
    const communityList = await fetchData(`${baseURL}/community-list` )
    const hero = await fetchData(`${baseURL}/hero?key=contact_us`)
    return (
        <div className='flex flex-col gap-10 mx-auto '>
            <ContactHero hero={hero} />
            {communityList?.map((item, index) => (
                index % 2 === 0 ? (
                    <Community key={index} mentor={item} />
                ) : (
                    <CommunityReverse key={index} mentor={item} />
                )
            ))}
            <StayInTouchContainer />
            <FooterTop />
        </div>
    );
};

export default ContactUs;