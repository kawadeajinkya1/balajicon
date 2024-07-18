import React from 'react'
import Carouse from '../Component/About/Carouse';
import Ab1 from '../Component/About/Ab1';
import Ab2 from '../Component/About/Ab2';
import Ques from './../Component/About/Ques';
import Vis from '../Component/About/Vis';
import Ab3 from '../Component/About/Ab3';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import Whatspp from './Whatspp';
import MetaTags from 'react-meta-tags';
function AboutUs() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (

    <div>

      <MetaTags>
      <head>

      <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Step into a realm of unparalleled craftsmanship with our industrial building construction services. Let us redefine excellence for your industrial infrastructure needs." />
 <meta name="keywords" content="Industrial Building Construction in Chakan, Industrial Building Construction Talegaon, Industrial Building Construction Bhosari, Industrial Building Construction Ranjangaon, Industrial Building Construction Pune" />
  <meta name="title" content="Elevate Your Industry: Best Industrial Building Construction Services " />
  
  <title>Elevate Your Industry: Best Industrial Building Construction Services </title>

      <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Building Construction in Chakan, Industrial Building Construction Talegaon, Industrial Building Construction Bhosari, Industrial Building Construction Ranjangaon, Industrial Building Construction Pune" />
    <meta property="og:title" content="Elevate Your Industry: Best Industrial Building Construction Services"/>
    <meta property="og:description" content="Step into a realm of unparalleled craftsmanship with our industrial building construction services. Let us redefine excellence for your industrial infrastructure needs." />
    <meta property="og:url" content="https://pebconstruction.in/" />
    <meta property="og:site_name" content="SRI BALAJEE INDUSTRIAL CONSTRUCTIONS PVT. LTD" />
    <meta property="og:image" href="https://pebconstruction.in/logo192.png" content="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:secure_url" content="https://pebconstruction.in/logo192.png" href="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="200" />
      </head>
      
      </MetaTags>


{/*
 <Helmet>

  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Step into a realm of unparalleled craftsmanship with our industrial building construction services. Let us redefine excellence for your industrial infrastructure needs." />
 <meta name="keywords" content="Industrial Building Construction in Chakan, Industrial Building Construction Talegaon, Industrial Building Construction Bhosari, Industrial Building Construction Ranjangaon, Industrial Building Construction Pune" />
  <meta name="title" content="Elevate Your Industry: Best Industrial Building Construction Services " />
  
  <title>Elevate Your Industry: Best Industrial Building Construction Services </title>

      <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Building Construction in Chakan, Industrial Building Construction Talegaon, Industrial Building Construction Bhosari, Industrial Building Construction Ranjangaon, Industrial Building Construction Pune" />
    <meta property="og:title" content="Elevate Your Industry: Best Industrial Building Construction Services"/>
    <meta property="og:description" content="Step into a realm of unparalleled craftsmanship with our industrial building construction services. Let us redefine excellence for your industrial infrastructure needs." />
    <meta property="og:url" content="https://pebconstruction.in/" />
    <meta property="og:site_name" content="SRI BALAJEE INDUSTRIAL CONSTRUCTIONS PVT. LTD" />
    <meta property="og:image" href="https://pebconstruction.in/logo192.png" content="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:secure_url" content="https://pebconstruction.in/logo192.png" href="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="200" />
 </Helmet>

 */}

      <Carouse />
      <Ab1 /> 
      <Ab3 />
      <Ab2 />
      <Ques />
    `` <Vis />
      <Whatspp/>
    </div>
  )
}

export default AboutUs
