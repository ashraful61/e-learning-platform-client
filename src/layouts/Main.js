import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseCategory from '../Pages/Courses/CourseCategory';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <>
          <Header></Header>
          <div class="flex">
            <div class="flex-none w-1/6">
               <CourseCategory></CourseCategory>
            </div>
            <div class="grow">
            <Outlet></Outlet>
            </div>
          </div>
      
          <Footer></Footer>
        </>
    );
};

export default Main;