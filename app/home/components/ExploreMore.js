"use client"
import React from 'react'

const ExploreMore = ({ link, page }) => {
    return (
        <div onClick={() => window.location.href = link}  ><button className='border border-[#FF8500] sm:text-[30px] text-[25px] font-medium px-10 py-2 rounded-[30px] text-[#4C4C4D]' >{page}</button></div>
    )
}

export default ExploreMore