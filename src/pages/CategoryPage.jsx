import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import { AppContext } from "../context/AppContext";


const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    const {theme} = useContext(AppContext);
    return (
        <div className='py-24'>
        <Header />
        <div className='max-w-[720px] px-[25px] mx-auto'>
          <div className='mb-8 flex items-center gap-3 '>
          <button className={`border-2 rounded-md border-${theme === 'light' ? '#dfdfdf' : '#555555'} py-1 px-4 hover:bg-${theme === 'light' ? '#efefef' : '#333333'} hover:text-${theme === 'light' ? 'black' : 'white'} transition-all text-${theme === 'light' ? 'black' : 'white'}`} onClick={() => navigation(-1)}>
          Back
        </button>

            <h2 className='font-bold '>
              Blogs on <span>{category}</span>
            </h2>
          </div>
          <Blogs />
        </div>
        <Pagination />
      </div>
    )
}

export default CategoryPage