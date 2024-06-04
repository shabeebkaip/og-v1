'use client'
import React, { useEffect, useState } from 'react';
import BlueGradient from "@/app/shared/components/BlueGradient";
import OrangeGradient from "@/app/shared/components/OrangeGradient";
import Hero from "@/app/profile/components/Hero";
import OrderHistory from "@/app/profile/components/OrderHistory";
import UpgradePlan from "@/app/profile/components/UpgradePlan";
import { getUserApi } from '@/app/shared/api';
import { globalGetService } from '@/app/utils/apiServices';






const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [orderHistory, setOrderHistory] = useState(null);
  const [token, setToken] = useState(null);

  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);


  const email = userData?.user?.email

  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserApi(token).then(res => setUserData(res.data));
    }

  }, [token]);

  useEffect(() => {
    
    if (email) {
      globalGetService('get-payment-history', { email: email , page: activePage })
        .then(response => {
          setOrderHistory(response.data);
          setTotalPages(response?.pagination?.totalPages);
          setTotalCount(response?.pagination?.totalCount);
        });

    }

  }, [email, activePage]);



  const handlePageChange = (page) => {
    setActivePage(page);
  };

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
          {/* <UpgradePlan /> */}

          < OrderHistory  orderHistory={orderHistory} totalPages={totalPages} activePage={activePage} handlePageChange={handlePageChange} totalCount={totalCount}/>

        </div>
      </div>

    </div>
  );
};

export default Profile;
