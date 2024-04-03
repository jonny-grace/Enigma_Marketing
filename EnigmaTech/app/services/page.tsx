import Banner from '@/Common/Banner'
import Services from '@/Components/Home/Services'
import Hero from '@/Components/Services/Hero'
import ServicesList from '@/Components/Services/ServicesList'
import { getAllServices } from '@/services/services'
import React from 'react'

async function page() {
  const services = await getAllServices()
  return (


    <div>
        <Banner title={'Our Services'} image={'about 1.jpg'} />
        
        <ServicesList serviceslist={services} />
    </div>
  )
}

export default page