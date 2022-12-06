import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import CourseCategory from '../Pages/Courses/CourseCategory';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
  const { theme } = useContext(AuthContext);
    return (
        <div data-theme={theme}>
          <Header></Header>
          <div className="flex">
            <div className="flex-none w-1/6">
               <CourseCategory></CourseCategory>
            </div>
            <div className="grow">
            <Outlet></Outlet>
            </div>
          </div>
      
          <Footer></Footer>
        </div>
    );
};

export default Main;