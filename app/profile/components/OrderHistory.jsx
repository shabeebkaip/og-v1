'use client'
import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { formatDateToNewsFormat } from '../../utils/dateFormatter';  

 


const OrderHistory = ({ orderHistory, totalPages, activePage, handlePageChange, totalCount }) => {
  const [currentPageItems, setCurrentPageItems] = useState([]);
  const [inputPage, setInputPage] = useState('');


  useEffect(() => {
    if (orderHistory) {
      setCurrentPageItems(orderHistory)
    }
  }, [orderHistory]);

  const handleGoButtonClick = () => {
    const page = parseInt(inputPage, 10);
    if (!isNaN(page) && page > 0 && page <= totalPages) {
      handlePageChange(page);
    } else {
      alert(`Please enter a valid page number between 1 and ${totalPages}`);
    }
  };

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  ;


  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between lg:p-10 mt-7">
        <p className="text-[#4C4C4D] text-2xl font-medium text-center">Order History</p>
        <a href="" className="text-[#FF8500] font-medium lg:text-base px-10 text-sm underline">View all orders</a>
      </div>
      <div className="overflow-x-scroll no-scrollbar rounded-2xl box-shadow">
        <div className="Table flex flex-col rounded-2xl w-[1000px] lg:w-full mx-auto">
          <div className="table_head grid grid-cols-6 rounded-t-2xl h-14 items-center text-center text-white bg-[#FF8500]">
            <div className="border-r h-full flex justify-center items-center">Order Number</div>
            <div className="border-r h-full flex justify-center items-center">Program Name</div>
            <div className="border-r h-full flex justify-center items-center">Name Of The Package</div>
            <div className="border-r h-full flex justify-center items-center">Total USD</div>
            <div className="border-r h-full flex justify-center items-center">Date Purchased</div>
            <div>Status</div>
          </div>
          <div>
            {currentPageItems.map((data, index) => (
              <div key={index} className="table_head grid grid-cols-6 text-center rounded-b-2xl h-12">
                <div className="border border-b-0 text-[#FF8500] border-[#D9D9D9] border-l-0">{data?.referenceID}</div>
                <div className="border border-b-0 border-[#D9D9D9]">{data?.selected?.program_name}</div>
                <div className="border border-b-0 border-[#D9D9D9]">{data?.selected?.package_name}</div>
                <div className="border border-b-0 border-[#D9D9D9]">{data?.selected?.amount}</div>
                <div className="border border-b-0 border-[#D9D9D9]">{formatDateToNewsFormat(data?.updatedAt)}</div>
                <div className="border border-b-0 border-[#D9D9D9] border-r-0">{data?.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-6 flex-nowrap">
        <div>
          <h1>showing <span className="text-[#FF8500]">{(activePage - 1) * 10 + 1}-{Math.min(activePage * 10, totalCount)}</span> of {totalCount} orders</h1>
        </div>
        <div className="flex-grow flex justify-center items-center">

          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              initialPage={1}
              onChange={(event, page) => handlePageChange(page)}
              page={activePage}
              sx={{
                '& .MuiPaginationItem-root': {
                  margin: '0 5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  border: '1px solid #ff8500',
                  borderRadius: '4px',
                  '&.Mui-selected': {
                    backgroundColor: '#ff8500',
                    color: 'white',
                    fontWeight: 'bold',
                  },
                  '&:not(.Mui-selected)': {
                    backgroundColor: 'white',
                    color: '#ff8500',
                    fontWeight: 'normal',
                  },
                },
              }}
            />
          </Stack>

        </div>
        <div>
          <h1>page: <input type="text" name="" id="" className="outline-none border border-[#D9D9D9] py-1 px-3 w-12  rounded-md text-center" value={inputPage} onChange={handleInputChange} /> <button className="border border-[#ff8500] text-[#ff8500] py-1 px-3 bg-white rounded-md" onClick={handleGoButtonClick}>Go</button></h1>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
