import NewsDetailHero from '../components/NewsDetailHero'
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft'
import BlueGradientRight from '@/app/shared/components/BlueGradientRight'
import FooterTop from '@/app/shared/components/FooterTop';
import axios from 'axios';
import { baseURL } from '../../../../constant';


const NewsDetails = async ({ newsId }) => {
    const id = newsId?.id
    const newsDetailResponse = await axios.get(`${baseURL}/news/${id}`)
    const data = newsDetailResponse.data
    return (
        <div className="w-full overflow-hidden pb-10 ">
            <div className="absolute md:w-[200px] w-[100px] md:h-[300px] h-[200px]  right-0 top-10  lg:hidden">
                <OrangeGradientLeft className="" />
            </div>
            <div className="absolute md:w-[200px] w-[100px] md:h-[300px] h-[200px] left-0 top-[210px]  lg:hidden  ">
                <BlueGradientRight />
            </div>
            <div>

                <NewsDetailHero newsDetail={data} />
                <div className='mt-20 '>
               {/* <News /> */}
                </div>
                <FooterTop/>
            </div>
        </div>
    )
}

export default NewsDetails