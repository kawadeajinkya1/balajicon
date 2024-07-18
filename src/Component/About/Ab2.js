import React from 'react';
import classes from './Ab2.module.css';

import Fade from 'react-reveal/Fade';

import img from "./../About/pix/Ab2a.webp";

const Ab2 = () => {
  return (
    <div className={classes.hold}>

      <br />
      <section className={classes.container}>

        <div className={classes.right}>
          <Fade left>
            <img src={img} alt="BALAJEE" className={classes.ri} />
          </Fade>  </div>
        <div className={classes.left}>
          <Fade top><br />
            <h2 className={classes.heading}>SBIC<span className={classes.heads}> Pvt Ltd</span></h2></Fade>
          <Fade right>
            <p className={classes.leftp}>&emsp;&emsp;&emsp;This platform was established in 2011 with a vision to provide erudite services in different industries. Being one of the premium Industrial Contractors in the world of engineering we owe a recommendable position in the market. The prime motive of SBIC Pvt Ltd is to provide the best solutions for the different needs of all the clients who came to us and make them satisfied. We never bothered about how much profit we make indeed we want to create a huge base of satisfied customers. The appreciation from the customers is the biggest asset of our company and we wanted to establish ourselves as- The most trusted platform for industrial construction!</p>
          </Fade> </div>
        <br />

      </section>
      <br />
    </div>
  )
}

export default Ab2