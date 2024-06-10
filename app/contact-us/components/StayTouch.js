"use client"
import React from 'react'

const StayTouch = ({ link, text, page, buttonClassName }) => {
    return (
        <div onClick={() => window.location.href = link}  ><button className={`rounded-full  text-[30px]  md:w-96 px-4 w-72 md:h-20 h-16 font-medium   ${buttonClassName}`}>{text}</button></div>
    )
}

export default StayTouch