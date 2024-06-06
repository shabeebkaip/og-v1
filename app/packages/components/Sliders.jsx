"use client"; // Ensure this is at the top of the file

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Scrollbar } from "swiper/modules";
import { getGlobalCookie } from "@/app/utils";
import Terms_conditions from "./Terms_conditions";

const Slider = ({ packages }) => {

  const [selectedPackage, setSelectedPackage] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.update();
      if (selectedPackage) {
        const selectedIndex = packages.findIndex(
          (pkg) => pkg === selectedPackage
        );
        swiper.slideTo(selectedIndex);
      }
    }
  }, [packages, selectedPackage]);

  const language = getGlobalCookie("language");

  const getBackgroundColor = (index) => {
    const colors = ["#d2d7e7", "#fdd8d8", "#f6f4bd"];
    return colors[index % 3];
  };

   const selectPackage = (item) => {
        setSelectedPackage(item);
        localStorage.setItem('selectedPackage', JSON.stringify(item));

        const termsElement = document.getElementById('terms-conditions');
        if (termsElement) {
            termsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className="relative flex justify-center w-full">
      <Swiper
        spaceBetween={10}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        className="flex justify-center pb-40 custom-scrollbar p-40"
        autoplay={{ delay: 3000 }}
        initialSlide={1}
        style={{ paddingBottom: "100px" }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        loopAdditionalSlides={2}
        onSlideChange={(swiper) => {
          const activeIndex = swiper.activeIndex;
          const selectedPackage = packages[activeIndex];
          setSelectedPackage(selectedPackage);
        }}
      >
        {packages?.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`rounded-2xl cursor-pointer relative`} // Added relative positioning
            onClick={() => selectPackage(item)}
          >
            <div className="relative">
              <div
                className={`flex w-full gap-[10%] duration-300 ease-in-out flex-col p-5 min-h-[600px] rounded-[23px] ${
                  selectedPackage === item
                    ? "hover:drop-shadow-lg hover:scale-100 box-shadow"
                    : "hover:scale-95"
                }`}
                style={{
                  backgroundColor: getBackgroundColor(index),
                  border:
                    selectedPackage === item
                      ? "6px solid #FF8500"
                      : "2px solid transparent",
                  boxShadow:
                    selectedPackage === item
                      ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"
                      : "",
                }}
              >
                <h1 className="uppercase text-[36px] text-[#4C4C4D] font-medium text-left pl-3">
                  {language === "ar" ? item.ar_name : item.name}
                </h1>
                <div className="px-6">
                  <p className="border-2 box-shadow border-[#92D1FB] bg-white rounded-[45px] text-center font-semibold text-[40px] text-[#4C4C4D]">
                    KWD {item.price}
                  </p>
                </div>
                <ul className="pl-6 text-left list-disc mt-4">
                  {language === "ar"
                    ? item.ar_planDetails.map((detail, index) => (
                        <li key={index} className="text-[26px] text-[#4C4C4D]">
                          {detail}
                        </li>
                      ))
                    : item.planDetails.map((detail, index) => (
                        <li key={index} className="text-[26px] text-[#4C4C4D]">
                          {detail}
                        </li>
                      ))}
                </ul>
              </div>
              {selectedPackage && selectedPackage !== item && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-2xl"></div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

