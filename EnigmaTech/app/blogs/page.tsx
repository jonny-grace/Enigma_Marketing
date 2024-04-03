import Banner from '@/Common/Banner'
import Bloglist from '@/Components/Blog/BlogList'
import { getAllBlogs } from '@/services/blogs'
import React from 'react'

async function page() {


  const blogs =await getAllBlogs();
  console.log(blogs)

  return (
    <div>
      
        <Banner title={'Our News'} image={'about 1.jpg'} />
        <Bloglist blogs={blogs}/>
    </div>
  )
}

export default page