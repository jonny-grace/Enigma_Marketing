import Hero from '@/Components/AboutUs/Hero'
import AboutUs from '@/Components/Home/AboutUs'
import TeamMembers from '@/Components/AboutUs/TeamMembers'
import React from 'react'
import Banner from '@/Common/Banner'

function page() {
  return (
    <div>
        <Banner title={'About Us'} image={'about 1.jpg'} />
        <AboutUs />
        <TeamMembers />
    </div>
  )
}

export default page