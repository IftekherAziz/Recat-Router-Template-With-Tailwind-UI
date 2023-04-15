import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className="mx-auto max-w-7xl py-10 px-2 sm:px-6 lg:px-8 md:min-h-[calc(100vh-280px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
