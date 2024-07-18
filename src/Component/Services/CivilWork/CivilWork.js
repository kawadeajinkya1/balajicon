import classes from './CivilWork.module.css';
import Fade from 'react-reveal/Fade';

import img1 from './../cart/Qualiity.png';
import img2 from './../cart/smart.png';
import img3 from './../cart/tech.png';
import Banner1 from './Banner1';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';

const CivilWork = () => {
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

        <Banner1 />
        <div className={classes.hold}>

            <div className={classes.left}>
                <Fade left>
                    <div className={classes.leftHead}>Civil Works:</div>
                </Fade>
                <div className={classes.L1}>
                    <Fade right>
                        <p>SBIC Pvt Ltd is engaged in providing Industrial Civil Works to the clients.SBIC Pvt Ltd Construction is engaged in providing Industrial Civil Works to the clients.
                            Our offered Industrial Civil Works services are carried out at different construction sites to determine load capacity of a pile using advance machinery. </p>
                    </Fade>
                </div>
                <Fade right>
                    <div className={classes.L1}><p>With the support of our adroit team of technical experts,
                        we are offering these Industrial Civil Works services according to the exact requirements of the customers. Our Industrial Civil Works services are widely praised across the nation due to their reliability & cost-effectiveness.
                        This Industrial Civil Work is delivered to our customers end at set time frame.
                    </p></div>
                </Fade>
                <Fade right>
                    <div className={classes.L1}><p>We have diverse experience as a leading civil contractor. SBIC Pvt Ltd is known for quality work in different civil projects like-
                        Land development, roads, bridges, educational institutes, government organisations, etc.</p></div>
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

export default CivilWork;
