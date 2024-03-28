import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
    <Header/>
    <div className='py- mx-auto max-w-[720px] px-[25px] '>
      <Blogs/>
    </div>
    <Pagination/>
  </div>
  )
}

export default Home