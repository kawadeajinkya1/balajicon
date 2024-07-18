import React from 'react';
import Galler from '../Component/Project/Galler';
import Rea from './../Component/Project/Rea';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import Whatspp from './Whatspp';
import MetaTags from 'react-meta-tags';

const Project = () => {
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
  <meta name="description" content="Empower your industrial endeavors with our comprehensive civil construction services. From concept to completion, we're committed to exceeding your expectations." />
 <meta name="keywords" content="Industrial Civil Construction in Chakan, Industrial Civil Construction in Talegaon, Industrial Civil Construction in Bhosari, Industrial Civil Construction in Ranjangaon, Industrial Civil Construction in Pune" />
  <meta name="title" content="Empowering Industries: Leaders in Industrial Civil Construction Solutions" />
  
  
<title> Empowering Industries: Leaders in Industrial Civil Construction Solutions</title>

      <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Civil Construction in Chakan, Industrial Civil Construction in Talegaon, Industrial Civil Construction in Bhosari, Industrial Civil Construction in Ranjangaon, Industrial Civil Construction in Pune" />
    <meta property="og:title" content="Empowering Industries: Leaders in Industrial Civil Construction Solutions"/>
    <meta property="og:description" content="Empower your industrial endeavors with our comprehensive civil construction services. From concept to completion, we're committed to exceeding your expectations."/>
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
  <meta name="description" content="Empower your industrial endeavors with our comprehensive civil construction services. From concept to completion, we're committed to exceeding your expectations." />
 <meta name="keywords" content="Industrial Civil Construction in Chakan, Industrial Civil Construction in Talegaon, Industrial Civil Construction in Bhosari, Industrial Civil Construction in Ranjangaon, Industrial Civil Construction in Pune" />
  <meta name="title" content="Empowering Industries: Leaders in Industrial Civil Construction Solutions" />
  
  
<title> Empowering Industries: Leaders in Industrial Civil Construction Solutions</title>

      <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Civil Construction in Chakan, Industrial Civil Construction in Talegaon, Industrial Civil Construction in Bhosari, Industrial Civil Construction in Ranjangaon, Industrial Civil Construction in Pune" />
    <meta property="og:title" content="Empowering Industries: Leaders in Industrial Civil Construction Solutions"/>
    <meta property="og:description" content="Empower your industrial endeavors with our comprehensive civil construction services. From concept to completion, we're committed to exceeding your expectations."/>
    <meta property="og:url" content="https://pebconstruction.in/" />
    <meta property="og:site_name" content="SRI BALAJEE INDUSTRIAL CONSTRUCTIONS PVT. LTD" />
    <meta property="og:image" href="https://pebconstruction.in/logo192.png" content="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:secure_url" content="https://pebconstruction.in/logo192.png" href="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="200" />
 </Helmet>
*/}

      <Galler></Galler>
      <Rea></Rea>
      <Whatspp/>
    </div>
  )
}

export default Project
