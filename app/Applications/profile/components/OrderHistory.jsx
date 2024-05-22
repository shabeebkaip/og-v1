import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
// import ReactPaginate from "react-paginate";
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";
import { useMediaQuery } from 'react-responsive';


const OrderHistory = () => {
    const isMobile = useMediaQuery({ maxWidth: 540 });
  
  const Orders = [
    {
      orderNumber: '#54321',
      orderType: 'Plan',
      nameOfThePackage: 'Basic',
      TotalUsd: '$300.00',
      datePurchased: '01/02/2024',
      status: 'Pending'
    },
    {
      orderNumber: '#54321',
      orderType: 'Plan',
      nameOfThePackage: 'Basic',
      TotalUsd: '$300.00',
      datePurchased: '01/02/2024',
      status: 'Pending'
    },
    {
      orderNumber: '#54321',
      orderType: 'Plan',
      nameOfThePackage: 'Basic',
      TotalUsd: '$300.00',
      datePurchased: '01/02/2024',
      status: 'Pending'
    },
    {
      orderNumber: '#54321',
      orderType: 'Plan',
      nameOfThePackage: 'Basic',
      TotalUsd: '$300.00',
      datePurchased: '01/02/2024',
      status: 'Pending'
    },
    {
      orderNumber: '#54321',
      orderType: 'Plan',
      nameOfThePackage: 'Basic',
      TotalUsd: '$300.00',
      datePurchased: '01/02/2024',
      status: 'Pending'
    }
];
  return (
    <div>
      <div className=" flex lg:flex-row flex-col justify-between lg:p-10  mt-7 "> <p className="text-[#4C4C4D] text-2xl font-medium text-center">Order History</p> <a href="" className="text-[#FF8500] font-medium lg:text-base px-10 text-sm underline">View all orders</a></div>
      <div className=" overflow-x-scroll no-scrollbar rounded-2xl  box-shadow">
      <div className=" Table flex flex-col   rounded-2xl  w-[1000px] lg:w-full mx-auto ">
        <div className="table_head grid grid-cols-6  rounded-t-2xl h-14 items-center text-center  text-white bg-[#FF8500] ">
          <div className="border-r h-full flex justify-center items-center ">Order Number</div>
          <div className="border-r h-full flex justify-center items-center ">Order Type</div>
          <div className="border-r h-full flex justify-center items-center ">Name Of The Package</div>
          <div className="border-r h-full flex justify-center items-center ">Total USD</div>
          <div className="border-r h-full flex justify-center items-center ">Date Purchased</div>
          <div >Status</div>
        </div>

        <div >
          {Orders.map((data)=>(
            <div key={data} className=" table_head grid grid-cols-6  text-center rounded-b-2xl h-12 ">
            <div className="border border-b-0 text-[#FF8500] border-[#D9D9D9] border-l-0">{data.orderNumber}</div>
            <div className="border border-b-0  border-[#D9D9D9]">{data.orderType}</div>
            <div className="border border-b-0 border-[#D9D9D9]">{data.nameOfThePackage}</div>
            <div className="border border-b-0 border-[#D9D9D9]">{data.TotalUsd}</div>
            <div className="border border-b-0 border-[#D9D9D9]">{data.datePurchased}</div>
            <div className="border border-b-0 border-[#D9D9D9] border-r-0">{data.status}</div>
          </div>
          ))}
        </div>

      </div>
    </div>
    <div className="flex flex-row lg:p-12 justify-between pt-6">
      <div className="text-[#4C4C4D]  sm:flex sm:flex-row grid grid-cols-2 text-base font-Sans font-medium"> Showing <p className="text-[#FF8500] ">1-4</p> of 20 order</div> 
      <Pagination
          className="lg:flex flex-row gap-4 text-[#4C4C4D] h-[30px] hidden  "
        breakLabel="-"
        nextLabel={
          <span className="w-[30px] h-[30px] border-1 rounded-md flex justify-center items-center border-[#4C4C4D] font-semibold text-lg"><IoIosArrowForward /></span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={20}
        previousLabel={
          <span className="w-[30px] h-[30px] border-1 rounded-md flex justify-center items-center border-[#4C4C4D] font-semibold text-lg"><IoIosArrowBack /></span>
        }
        renderOnZeroPageCount={null}
        pageClassName="pagination-number"
        breakClassName="pagination-break"
        activeClassName="pagination-active"
        
      />
      <div className="flex flex-row gap-1 right-0 ">
        <p className="h-[30px] text-[#4C4C4D] text-center font-medium">page: </p>
        <input type="text" className="h-[30px] w-[40px] border border-black rounded-md"/>
        <p className="h-[30px] w-[40px] text-center text-[#FF8500] font-semibold text-base border border-[#FF8500] rounded-md">GO</p>
      </div>
    </div>
    <div className="flex justify-center pb-6 pt-8">
      <Pagination
          className="flex flex-row sm:gap-4 gap-2 sm:w-auto w-[90%] text-[#4C4C4D] sm:h-[30px]  lg:hidden  "
        breakLabel="-"
        nextLabel={
          <span className="w-[30px] h-[30px] border-1 rounded-md flex justify-center items-center border-[#4C4C4D] font-semibold text-lg"><IoIosArrowForward /></span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={20}
        previousLabel={
          <span className="w-[30px] h-[30px] border-1 rounded-md flex justify-center items-center border-[#4C4C4D] font-semibold text-lg"><IoIosArrowBack /></span>
        }
        renderOnZeroPageCount={null}
        pageClassName="pagination-number"
        breakClassName="pagination-break"
        activeClassName="pagination-active"
        
      />
      </div>
    </div>
    
  )
  

}

export default OrderHistory
