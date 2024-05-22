import Hero from "../components/Hero"
import News from "../components/News"
import { getHeroApi, getNewsListApi } from '../api'
import { setNewsHero, setNewsList, setNewsPagination } from '@/app/redux/newsReducer'
import FooterTop from '@/app/shared/components/FooterTop';



const NewsPage = () => {

    return (
        <div className=" overflow-hidden pb-8">
            <div className="md:px-0  px-2 mx-auto">
                <Hero />
            </div>
            <div className="">
                 <News />
            </div>
            {/* {hero && <FooterTop/> } */}
        </div>
    )
}

export default NewsPage
