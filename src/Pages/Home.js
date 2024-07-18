import React from 'react'
import Carousel from './../Component/Home/Carousel';
import Home1 from './../Component/Home/Home1';
import Well from './../Component/Home/Well';
import Patronslider from '../Component/Home/Patronslider';
import Qual from '../Component/Home/Qual';
import Counter from './../Component/Home/Counter';
import Expertise from '../Component/Home/Expertise';
import Rsli from './../Component/Home/Rsli';
import BlockCard from '../Component/Home/BlockCard';
import Take from '../Component/Home/Take';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import Whatspp from './Whatspp';
import MetaTags from 'react-meta-tags';
function Home() {

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
  <meta name="description" content="We're your trusted partner for high-quality industrial civil work solutions, and Industrial Civil Work Manufacturer. From foundations to finishing touches, we deliver excellence every time." />
 <meta name="keywords" content="Industrial Civil Work manufacturer in Chakan, Industrial Civil Work manufacturer in Talegaon, Industrial Civil Work manufacturer in Bhosari, Industrial Civil Work manufacturer in Ranjangaon, Industrial Civil Work manufacturer in Hadapsar" />
  <meta name="title" content="Build with Confidence: Expert Industrial Civil Work Manufacturer " />
  
<title>Build with Confidence: Expert Industrial Civil Work Manufacturer</title>

  <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Civil Work manufacturer in Chakan, Industrial Civil Work manufacturer in Talegaon, Industrial Civil Work manufacturer in Bhosari, Industrial Civil Work manufacturer in Ranjangaon, Industrial Civil Work manufacturer in Hadapsar" />
    <meta property="og:title" content="Build with Confidence: Expert Industrial Civil Work Manufacturer "/>
    <meta property="og:description" content="We're your trusted partner for high-quality industrial civil work solutions, and Industrial Civil Work Manufacturer. From foundations to finishing touches, we deliver excellence every time." />
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
  <meta name="description" content="We're your trusted partner for high-quality industrial civil work solutions, and Industrial Civil Work Manufacturer. From foundations to finishing touches, we deliver excellence every time." />
 <meta name="keywords" content="Industrial Civil Work manufacturer in Chakan, Industrial Civil Work manufacturer in Talegaon, Industrial Civil Work manufacturer in Bhosari, Industrial Civil Work manufacturer in Ranjangaon, Industrial Civil Work manufacturer in Hadapsar" />
  <meta name="title" content="Build with Confidence: Expert Industrial Civil Work Manufacturer " />
  
<title>Build with Confidence: Expert Industrial Civil Work Manufacturer</title>

  <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Civil Work manufacturer in Chakan, Industrial Civil Work manufacturer in Talegaon, Industrial Civil Work manufacturer in Bhosari, Industrial Civil Work manufacturer in Ranjangaon, Industrial Civil Work manufacturer in Hadapsar" />
    <meta property="og:title" content="Build with Confidence: Expert Industrial Civil Work Manufacturer "/>
    <meta property="og:description" content="We're your trusted partner for high-quality industrial civil work solutions, and Industrial Civil Work Manufacturer. From foundations to finishing touches, we deliver excellence every time." />
    <meta property="og:url" content="https://pebconstruction.in/" />
    <meta property="og:site_name" content="SRI BALAJEE INDUSTRIAL CONSTRUCTIONS PVT. LTD" />
    <meta property="og:image" href="https://pebconstruction.in/logo192.png" content="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:secure_url" content="https://pebconstruction.in/logo192.png" href="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="200" />

</Helmet>
*/}
      <Carousel />
      <Home1 />
      <Well />
      <Patronslider />
      <Qual />
      <Counter />
      <BlockCard />
      <Expertise />
      <Take/>
      <Rsli />
     <Whatspp></Whatspp>

    </div>
  )
}

export default Home


/*
  
      
      

     
     
 
   
  

      */