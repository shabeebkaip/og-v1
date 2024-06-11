

"use client";
import { useState, useEffect } from "react";
import { globalGetService } from "@/app/utils/apiServices";
import moment from "moment";
import { displayDateFormatShort } from "@/app/constant";
import Link from "next/link";
import { SlReload } from "react-icons/sl";
import { Box, Skeleton } from "@mui/material";

function Animations() {
  return (
    <>
      {Array.from(new Array(4)).map((_, index) => (
        <Box key={index} sx={{ width: 300 }}>
          <Skeleton height={300} />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ))}
    </>
  );
}

const BlogsList = ({ blogs, categories, removeBlogId }) => {
  const [newsList, setNewsList] = useState([]);
  const [newsCategory, setNewsCategory] = useState(categories || []);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [visibleItems, setVisibleItems] = useState({ null: 4 }); // Initialize with 4 items for 'all'
  const [noNewsFound, setNoNewsFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setNewsList(blogs);
    setVisibleItems((prev) => ({
      ...prev,
      null: 4, // Initialize visible items for 'all' to 4
    }));
    setLoading(false);
  }, [blogs]);

  useEffect(() => {
    if(removeBlogId){
      setNewsList(blogs.filter(item => item._id !== removeBlogId))
    }
  }, [removeBlogId, blogs])

  const handleCategory = (id) => {
    setLoading(true);
    setSelectedCategoryId(id);
    if (id === null) {
      // 'All' category
      setNewsList(blogs);
      setNoNewsFound(false);
      setVisibleItems((prev) => ({
        ...prev,
        null: 4, // Reset visible items for 'all' to 4
      }));
      setLoading(false);
    } else {
      // Specific category
      globalGetService('news', { category: id })
        .then((res) => {
          if (res.data.length === 0) {
            setNoNewsFound(true);
          } else {
            setNewsList(res.data);
            setNoNewsFound(false);
            setVisibleItems((prev) => ({
              ...prev,
              [id]: 4, // Initialize visible items for this category to 4
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching news:", error);
          setNoNewsFound(true);
        })
        .finally(() => setLoading(false));
    }
  };

  const loadMore = () => {
    setVisibleItems((prev) => ({
      ...prev,
      [selectedCategoryId]: (prev[selectedCategoryId] || 4) + 4, // Increment by 4
    }));
  };

  const visibleCount = visibleItems[selectedCategoryId] || 4;

  return (
    <div className="container mx-auto pb-8">
      {loading ? (
        <div className="grid grid-cols-4 gap-5">
          <Animations />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="relative flex flex-row justify-center gap-4 px-10 md:justify-end capitalize">
            <p
              className={`text-base font-medium cursor-pointer ${
                selectedCategoryId === null &&
                "bg-[#FF8500] text-white px-3 rounded-xl"
              }`}
              onClick={() => handleCategory(null)}
            >
              all
            </p>
            {newsCategory?.map((item, index) => (
              <button
                className={`text-black px-3 rounded-xl ${
                  selectedCategoryId === item._id ? "bg-[#FF8500] text-white" : ""
                }`}
                key={index}
                onClick={() => handleCategory(item._id)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="">
            {noNewsFound ? (
              <p className="mt-8 flex justify-around text-red-500 text-[20px]">
                No News Found!
              </p>
            ) : (
              <div className="flex-col p-2 md:grid md:grid-cols-4 2xl:gap-2 lg:gap-3 lg:p-5 md:p-2 md:gap-2">
                {newsList?.slice(0, visibleCount).map((item, index) => (
                  <div
                    key={index}
                    className="w-full p-1 mt-4 flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-full h-60 bg-cover bg-top bg-no-repeat rounded-md"
                        style={{ backgroundImage: `url(${item?.image?.[0]})` }}
                      ></div>
                      <h3 className="text-[16px] 2xl:text-[16px] md:text-[12px] lg:text-[14px] leading-[18.77px] 2xl:leading-[18.77px] font-normal mt-9">
                        {item?.createdAt
                          ? moment(item?.createdAt).format(displayDateFormatShort)
                          : ""}
                      </h3>
                      <h2 className="uppercase font-medium sm:text-[30px] text-[25px] lg:text-[25px] 2xl:text-[30px] sm:leading-[35.19px] text-[#4C4C4D] md:text-[20px] md:leading-tight leading-7 sm:mt-0 mt-2 ">
                        {item?.title}
                      </h2>
                      <p className="sm:text-[22px] text-[16px] font-light leading-[25.81px] lg:text-[19px] lg:leading-tight 2xl:text-[22px] md:text-[15px] md:leading-tight sm:mt-0 mt-2 ">
                        {item?.shortDescription}
                      </p>
                    </div>
                    <Link href={`/blogs/${item._id}`} prefetch={true}>
                      <button className="mt-6 md:mb-1 mb-14 rounded-full border border-[#FF8500] w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]">
                        <span>Read more&rarr;</span>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          {!noNewsFound && (
            <div className="flex flex-row items-center justify-center pt-8">
              {visibleCount < newsList?.length && (
                <button
                  onClick={loadMore}
                  className="text-[26px] font-light leading-[30.44px] flex gap-5 lg:text-[25px] 2xl:text-[30px] md:text-[20px]"
                >
                  Load More{" "}
                  <span className="text-[#FF8500] w-[27.22px] h-[30.01px] md:mt-1">
                    <SlReload />
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogsList;
