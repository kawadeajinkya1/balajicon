import React from 'react'
import Enqir from '../Component/Enqiry/Enqir';
import Poster from './../Component/Enqiry/Poster';
import { useEffect } from 'react';
import Whatspp from './Whatspp';
import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';

function Enquiry() {
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
  <meta name="description" content="Discover the strength, speed, and affordability of PEB sheds. We manufacture top-quality, customizable PEB solutions for diverse industrial applications." />
 <meta name="keywords" content="PEB Shed Manufacturer in Chakan, PEB Shed Manufacturer in Talegaon, PEB Shed Manufacturer in Bhosari, PEB Shed Manufacturer in Pune, PEB Shed Manufacturer in Hadapsar" />
  <meta name="title" content="Engineered Efficiency: Premium PEB Sheds Manufacturer for Every Need " />
  
  <title>Engineered Efficiency: Premium PEB Sheds Manufacturer for Every Need</title>

      <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="PEB Shed Manufacturer in Chakan, PEB Shed Manufacturer in Talegaon, PEB Shed Manufacturer in Bhosari, PEB Shed Manufacturer in Pune, PEB Shed Manufacturer in Hadapsar" />
    <meta property="og:title" content="Engineered Efficiency: Premium PEB Sheds Manufacturer for Every Need"/>
    <meta property="og:description" content="Discover the strength, speed, and affordability of PEB sheds. We manufacture top-quality, customizable PEB solutions for diverse industrial applications." />
    <meta property="og:url" content="https://pebconstruction.in/" />
    <meta property="og:site_name" content="SRI BALAJEE INDUSTRIAL CONSTRUCTIONS PVT. LTD" />
    <meta property="og:image" href="https://pebconstruction.in/logo192.png" content="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:secure_url" content="https://pebconstruction.in/logo192.png" href="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="200" />


</head>


</MetaTags>





      {/*  <Helmet>

  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Discover the strength, speed, and affordability of PEB sheds. We manufacture top-quality, customizable PEB solutions for diverse industrial applications." />
 <meta name="keywords" content="PEB Shed Manufacturer in Chakan, PEB Shed Manufacturer in Talegaon, PEB Shed Manufacturer in Bhosari, PEB Shed Manufacturer in Pune, PEB Shed Manufacturer in Hadapsar" />
  <meta name="title" content="Engineered Efficiency: Premium PEB Sheds Manufacturer for Every Need " />
  
  <title>Engineered Efficiency: Premium PEB Sheds Manufacturer for Every Need</title>

      <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="PEB Shed Manufacturer in Chakan, PEB Shed Manufacturer in Talegaon, PEB Shed Manufacturer in Bhosari, PEB Shed Manufacturer in Pune, PEB Shed Manufacturer in Hadapsar" />
    <meta property="og:title" content="Engineered Efficiency: Premium PEB Sheds Manufacturer for Every Need"/>
    <meta property="og:description" content="Discover the strength, speed, and affordability of PEB sheds. We manufacture top-quality, customizable PEB solutions for diverse industrial applications." />
    <meta property="og:url" content="https://pebconstruction.in/" />
    <meta property="og:site_name" content="SRI BALAJEE INDUSTRIAL CONSTRUCTIONS PVT. LTD" />
    <meta property="og:image" href="https://pebconstruction.in/logo192.png" content="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:secure_url" content="https://pebconstruction.in/logo192.png" href="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="200" />
 </Helmet>

 */}


      <Poster></Poster>
      <Enqir></Enqir>
      <Whatspp/>
    </div>
  )
}

export default Enquiry
