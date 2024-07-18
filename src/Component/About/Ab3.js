import React from 'react';
import classes from './Ab3.module.css';

import Fade from 'react-reveal/Fade';


import img from "./../About/pix/sri-removebg-preview.png";

const Ab3 = () => {
  return (
    <div>

      <section className={classes.container}>
        <div className={classes.left}>
          <br />
          <Fade top>
            <h2 className={classes.heading}>A COMMITMENT <span className={classes.heads}>TO QUALITY</span></h2> </Fade>
          <div className={classes.hy}>  <Fade left>
            <p className={classes.leftp}>&emsp;&emsp;&emsp;The hallmark of Sri Balajee Industrial Constructions Pvt Ltd,lies in its commitment to reliability and affordability. Under
              the Director's guidance Mr. SANTOSH HIRMUKHE, the company has cultivated a reputation for providing offerings that are not only highly dependable but also cost-effective, ensuring maximum value
              for clients' investments.
              In an industry that evolves rapidly, I am committed to keeping SBIC Pvt Ltd at the forefront of innovation. We embrace sustainable practices, cutting-edge technology, and a client-centric approach that goes beyond mere satisfaction to exceed expectations.

              Our mission is clear — to build not just structures, but relationships. We believe in transparency, open communication, and collaboration at every stage of the construction process. This philosophy has earned us the trust of our clients and has been the cornerstone of our success.

              I invite you to explore the possibilities with SBIC Pvt Ltd. Whether you are envisioning a commercial space that inspires productivity or a home that reflects your unique lifestyle,
              we have the expertise to bring your dreams to life.</p> </Fade>
            <div className={classes.san}>
              <img src={img} alt="BALAJEE" className={classes.ri} />
              <p className={classes.fo}> Mr. SANTOSH HIRMUKHE </p>

            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Ab3