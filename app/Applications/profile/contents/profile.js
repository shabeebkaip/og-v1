'use client'
import React, { useEffect, useState } from 'react';
import BlueGradient from "../../../shared/components/BlueGradient";
import OrangeGradient from "../../../shared/components/OrangeGradient";
import Hero from "../components/Hero";
import OrderHistory from "../components/OrderHistory";
import UpgradePlan from "../components/UpgradePlan";
import { getUserApi } from '../../../shared/api';

const Profile = () => {
  const [userData, setUserData] = useState(null)

  console.log(userData);
  const getEmailFromCookies = () => {
      const cookies = document.cookie.split('; ');
      const tokenCookie = cookies.find(row => row.startsWith('token='));
      return tokenCookie ? tokenCookie.split('=')[1] : null;
  };
  const token = getEmailFromCookies();
  console.log(token);

  useEffect(() => {
    if (token) {
      getUserApi(token).then(res => setUserData(res.data));
    }
  })
  return (
    <div>
      <div className="absolute lg:top-[-5%] w-[400px] h-[400px] right-[0px] hidden lg:block   ">
        <BlueGradient className="" />
      </div>
      <div className=" relative overflow-hidden">
        <div className="absolute lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] lg:left-[-100px] top-0  right-[-50px]  ">
          <OrangeGradient />
        </div>
        <div className="absolute  w-[400px] h-[400px] lg:left-[-200px] lg:top-96 top-[780px] lg:mx-auto  right-[-200px]  ">
          <OrangeGradient />
        </div>

        <div className="absolute sm:top[200px] top-[290px] w-[400px] h-[400px] left-[-200px] lg:hidden block  ">
          <BlueGradient className="" />
        </div>


        <div className=" container mx-auto px-3 md:px-0">
          <Hero user={userData?.user} />
          <UpgradePlan />
          <OrderHistory />
        </div>
      </div>

    </div>
  );
};

export default Profile;
