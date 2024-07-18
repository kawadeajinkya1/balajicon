import classes from './Factory.module.css';
import Fade from 'react-reveal/Fade';
import { useEffect } from 'react';
import img1 from './../cart/Qualiity.png';
import img2 from './../cart/smart.png';
import img3 from './../cart/tech.png';
import Banner8 from './Banner8';
import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';

const Factory = () => {
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

        <Banner8 />
        <div className={classes.hold}>

            <div className={classes.left}>
                <Fade left>
                    <div className={classes.leftHead}>Factory Shed Fabrication Services:</div>
                </Fade>
                <div className={classes.L1}>
                    <Fade right>
                        <p>We offer a wide range of ready to install factory sheds that you can comfortably install in your plant.
                            Along with that we also offer customised fabrication as per the requirement of the clients.</p>
                    </Fade>
                </div>
                <Fade right>
                    <div className={classes.L1}><p>We are the renowned organization to offer our precious clients an excellent quality Shed Fabrication Work. Our provided service is performed by our highly experienced experts in the best possible manner.
                        Our adept professionals make plans as per the specifications of our valuable clients.
                    </p></div>
                </Fade>
                <Fade right>
                    <div className={classes.L1}><p> the offered service is executed in accordance with the set quality standards. To perform this service, we use modern technology and optimum quality machines and tools.
                        The offered service is widely appreciated by our clients owing to its promptness and flawlessness.SBIC Pvt Ltd is different from all other prevalent platforms as here you will get the complete assurance of quality and affordability. All the products are designed as per ISI specifications. While designing and manufacturing we never compromise on the quality aspects of the product and our all products ensure all- out safety and security.
                        Being a renowned industrial construction companies, we always provide quality services in terms of Engineering and Management.</p></div>
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

export default Factory;
