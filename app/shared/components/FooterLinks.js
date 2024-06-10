"use client"
import React from 'react'

const FooterLinks = ({ link, page }) => {
    return (
        <div onClick={() => window.location.href = link}  ><li className="cursor-pointer font-normal hover:text-[#FF8500]">{page}</li></div>
    )
}

export default FooterLinks