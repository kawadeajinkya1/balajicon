import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './../Component/Nav/Header';
import Nav from './../Component/Nav/Navi';
import Footer from '../Component/Foot/Footer';



function RootLayout() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
     
      
    </div>
  )
}

export default RootLayout
