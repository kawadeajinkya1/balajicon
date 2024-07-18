import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Carp";
import classes from './Carp.module.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./../About/pix/hand.jpg";
import img2 from './../Contact/book/IMG_2968.jpg';
import img3 from './../Contact/book/IMG_2971.jpg';
import img4 from './../Contact/book/IMG_0007.jpg';
import img5 from './../Contact/book/IMG_6597.jpg';

export default class Carouse extends Component {
    render() {
      const settings = {
  
        dots: false,
        fade: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,    
    };
      return (
        <div className={classes.ak}>
        
          <Slider {...settings}>
           
            <div>
            <Card img={img1}></Card>
            </div>

            <div>
            <Card img={img2}></Card>
            </div>

            <div>
            <Card img={img3}></Card>
            </div>

            <div>
            <Card img={img4}></Card>
            </div>

            <div>
            <Card img={img5}></Card>
            </div>

          </Slider>
        </div>
      );
    }
  }