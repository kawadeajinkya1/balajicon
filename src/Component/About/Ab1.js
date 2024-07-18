import React from 'react';
import classes from './Ab1.module.css';

import Fade from 'react-reveal/Fade';


import img from "./../Contact/book/IMG_0273.jpg";

const Ab1 = () => {
  return (
    <div>

      <section className={classes.container}>
        <div className={classes.left}>
          <br />
          <Fade top>
            <h2 className={classes.heading}>INTROD<span className={classes.heads}>UCTION</span></h2> </Fade>
          <Fade left>
            <p className={classes.leftp}> Sri Balajee Industrial Constructions Pvt. Ltd.was established 13 years ago, with the main objective to carry on the business of industrial sheds, warehouse and turnkey project.Since then the company has continuously made a progress in the rendering services and today it has accomplished a reputation of providing the best infrastructural facilities in the field.Our expert team will try to understand his requirements and future goals and on the basis of that, they will suggest the best solutions.</p> </Fade>
        </div>
        <div className={classes.right}><Fade right>
          <img src={img} alt="BALAJEE" className={classes.ri} /> </Fade>
        </div>
      </section>

    </div>
  )
}

export default Ab1