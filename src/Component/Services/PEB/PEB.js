import classes from './PEB.module.css';
import Fade from 'react-reveal/Fade';

import img1 from './../cart/Qualiity.png';
import img2 from './../cart/smart.png';
import img3 from './../cart/tech.png';
import Banner2 from './Banner2';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';
const PEB = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <div>
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

        <Banner2 />
        <div className={classes.hold}>

            <div className={classes.left}>
                <Fade left>
                    <div className={classes.leftHead}>PEB & Heavy Fabrication Works:</div>
                </Fade>
                <div className={classes.L1}>
                    <Fade right>
                        <p>We have vast experience in heavy fabrication works.
                            Our expert technicians know modern-day technology and work as per the requirements of different industries.</p>
                    </Fade>
                </div>
                <Fade right>
                    <div className={classes.L1}><p>SBIC Pvt Ltd holds expertise in providing excellent Industrial Fabrication Services to our clients. Our Industrial Fabrication work is supported by an excellent start-up and commissioning team that works to make certain your entire industrial Fabrication project is integrated with the instrumentation required to operate easily.
                    </p></div>
                </Fade>
                <Fade right>
                    <div className={classes.L1}><p>We are dedicated to Industrial Fabrication Project and our clients can be sure that the professionals we put on their projects, craft and supervisory personnel, are skilled in their respective crafts. This Industrial Construction is done on contract basis, Supervision basis etc. Quality construction in stipulated time frame is our strength.</p></div>
                </Fade>
            </div>


            <Fade right>
                <div className={classes.right}>

                    <div className={classes.why}><span>Why SBIC Pvt Ltd ?</span></div>
                    <div className={classes.innerHold}>
                        <span className={classes.head}>
                            <img src={img1} className={classes.icon}></img>
                            Committed to Quality</span>
                        <span className={classes.txt}>The goal of our Quality Program is to deliver a product that functions exactly as expected .</span>
                    </div>

                    <div className={classes.innerHold}>
                        <span className={classes.head}>
                            <img src={img2} className={classes.icon}></img>
                            Smart Build</span>
                        <span className={classes.txt}>SmartBuild is a collaborative team effort where all project team members work together to plan, organize, and execute work for our clients with impeccable coordination, efficiency, and flow.</span>
                    </div>

                    <div className={classes.innerHold}>
                        <span className={classes.head}>
                            <img src={img3} className={classes.icon}></img>
                            Technology</span>
                        <span className={classes.txt}>Each new emerging technology trend and tool goes through the same process – research, vet, determine the value-added – and only after these steps do we consider implementing the technology into our operations.</span>
                    </div>
                </div>
            </Fade>



        </div>


    </div >

};

export default PEB;

