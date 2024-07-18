import classes from './Interior.module.css';
import Fade from 'react-reveal/Fade';

import img1 from './../cart/Qualiity.png';
import img2 from './../cart/smart.png';
import img3 from './../cart/tech.png';
import Banner9 from './Banner9';
import {useEffect} from 'react';
import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';

const Interior = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
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

      <Banner9/>
        <div className={classes.hold}>

            <div className={classes.left}>
                <Fade left>
                    <div className={classes.leftHead}>Industrial Interior Works:</div>
                </Fade>
                <div className={classes.L1}>
                    <Fade right>
                        <p>When we talk about industrial construction then most of the time we talk about affordability and durability but there are very few chances when we talk about but the interior of Industry as well. 
                        The interior work in industrial construction is equally important. If you do not pay proper attention to the interior of industrial construction then it may affect the overall structure and the efficiency of the employees working in the structure. Due to this reason, Balaji constructions come up with highly advanced solutions for industrial interior design which will ensure the optimum utilization of every inch and provide the best working ambience. </p>
                    </Fade>
                </div>
                <Fade right>
                    <div className={classes.L1}><p>Being expert industrial interior designers, we work with clients to create pleasing working spaces. Our clients range from warehouse owners, production units to large corporations. No matter what is the size, or the budget; every interior designer of Balaji construction works to create manufacturing spaces that are worker-friendly, attractive, functional, and safe. Along with that, we take complete care of the budget of the clients.
                         Our objective is to provide the best services at the minimum cost so that we can save the hard-earned money of the clients.
                    </p></div>
                </Fade>
                <Fade right>
                    <div className={classes.L1}><p>Balaji is the first choice of everyone who is looking for quality interior work.
                         In order to provide a complete industry feel, the ducts and pipes are exposed, on the other hand, lighter wall colours are the best for the perfect look. The secret of Balaji construction for Industrial Interior Works is - the unfinished look of the interiors gives a good feel.</p></div>
                </Fade>
            </div>


            <Fade right>
                <div className={classes.right}>

                    <div className={classes.why}><span>Why Sri Balajee ?</span></div>
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

export default Interior;
