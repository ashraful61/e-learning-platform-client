import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <>
          <Header></Header>
          <div class="flex">
            <div class="flex-none w-1/6">
               
            </div>
            <div class="grow">
              02
            </div>
          </div>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Main;