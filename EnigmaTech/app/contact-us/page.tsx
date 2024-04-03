import Banner from '@/Common/Banner'
import ContactUs from '@/Components/Home/ContactUs'
import React from 'react'

function page() {
  return (
    <div>
        <Banner title={'Contact Us'} image={'about 1.jpg'} />
        <ContactUs />
    </div>
  )
}

export default page