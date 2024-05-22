
// import React from 'react'
import Hero from '../components/Hero'
import PackagePlans from '../components/PackagePlans'
import Terms_conditions from '../components/Terms_conditions'
import Continue from '../components/Continue'
import FooterTop from '@/app/shared/components/FooterTop';


const Packages = () => {
  return (
    <div className='container  mx-auto overflow-hidden md:px-0'>
      <Hero />
      <PackagePlans />
      <Terms_conditions />
      <Continue />
      <FooterTop />

    </div>
  )
}

export default Packages
