import HeroCarrier from "../components/HeroCarrier.jsx";
import Joinus from "../components/Joinus.jsx";
import Teamlist from "../components/Teamlist.jsx";
import Explore from "../components/Explore.jsx";
import GlobalHub from "../components/GlobalHub.jsx";
import FooterTop from '@/app/shared/components/FooterTop';
import axios from "axios";
import { baseURL } from '@/app/constant';

const Careers = async () => {
  const careelListResponse = await axios.get(`${baseURL}/careers`)

  const careers = careelListResponse.data
  return (
    <div className=" overflow-hidden pb-8">
      <div className="container md:px-0  px-6 mx-auto">
        <HeroCarrier />
      </div>
      <div className="md:px-0 px-6 container mx-auto">
        <Joinus />
      </div>
      <div className=" ">
        <Teamlist careers={careers} />
      </div>
      <div className=" px-6 container mx-auto">
        <Explore />
        <GlobalHub />
      </div>
      <FooterTop />
    </div>

  );
};

export default Careers;
