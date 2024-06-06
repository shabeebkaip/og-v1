"use client";
import React, { useState } from 'react'
import PackagePlans from './PackagePlans'
import Terms_conditions from './Terms_conditions'
import Continue from './Continue'

const Wrapper = ({ packages }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [checked, setChecked] = useState(false)
  console.log(selectedPackage)
  return (
    <>
      <PackagePlans selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} packages={packages} />
      <Terms_conditions checked={checked} setChecked={setChecked} />
      <Continue packages={packages} selectedPackage={selectedPackage} checked={checked} setChecked={setChecked} />
    </>
  )
}

export default Wrapper