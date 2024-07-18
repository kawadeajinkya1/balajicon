import React from 'react';
import Service from '../Component/Services/Service';
import AboutCard from '../Component/Services/AboutCard';
import Hord from '../Component/Services/Hord';
import { useEffect } from 'react';
import Whatspp from './Whatspp';
import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";
function Services() {

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
  <meta name="description" content="Experience a seamless journey from concept to completion with our industrial turnkey projects." />
 <meta name="keywords" content="Industrial Turnkey Projects in Pune, Industrial Turnkey Projects in Chakan, Industrial Turnkey Projects in Ranjangaon, Industrial Turnkey Projects in Bhosari, Industrial Turnkey Projects in Talegaon" />
  <meta name="title" content="Seamless Solutions for Industrial Turnkey Projects" />
  
<title>Seamless Solutions for Industrial Turnkey Projects</title>

    <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Turnkey Projects in Pune, Industrial Turnkey Projects in Chakan, Industrial Turnkey Projects in Ranjangaon, Industrial Turnkey Projects in Bhosari, Industrial Turnkey Projects in Talegaon" />
    <meta property="og:title" content="Seamless Solutions for Industrial Turnkey Projects"/>
    <meta property="og:description" content="Experience a seamless journey from concept to completion with our industrial turnkey projects."/>
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
  <meta name="description" content="Experience a seamless journey from concept to completion with our industrial turnkey projects." />
 <meta name="keywords" content="Industrial Turnkey Projects in Pune, Industrial Turnkey Projects in Chakan, Industrial Turnkey Projects in Ranjangaon, Industrial Turnkey Projects in Bhosari, Industrial Turnkey Projects in Talegaon" />
  <meta name="title" content="Seamless Solutions for Industrial Turnkey Projects" />
  
<title>Seamless Solutions for Industrial Turnkey Projects</title>

    <link rel="canonical" href="https://pebconstruction.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:keywords" content="Industrial Turnkey Projects in Pune, Industrial Turnkey Projects in Chakan, Industrial Turnkey Projects in Ranjangaon, Industrial Turnkey Projects in Bhosari, Industrial Turnkey Projects in Talegaon" />
    <meta property="og:title" content="Seamless Solutions for Industrial Turnkey Projects"/>
    <meta property="og:description" content="Experience a seamless journey from concept to completion with our industrial turnkey projects."/>
    <meta property="og:url" content="https://pebconstruction.in/" />
    <meta property="og:site_name" content="SRI BALAJEE INDUSTRIAL CONSTRUCTIONS PVT. LTD" />
    <meta property="og:image" href="https://pebconstruction.in/logo192.png" content="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:secure_url" content="https://pebconstruction.in/logo192.png" href="https://pebconstruction.in/logo192.png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="200" />
    
 </Helmet>
*/}
      <Hord></Hord>
      <Service></Service>
      <Whatspp/>
      </div>
  )
}

export default Services
