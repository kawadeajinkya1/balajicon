import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Carprop";
import classes from './Card.module.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './../Contact/book/IMG_0279.jpg';
import img2 from "./../Contact/book/IMG_0295.jpg";
import img3 from "./../Contact/book/IMG_0306.jpg";
import img4 from "./../Contact/book/IMG_2767.jpg";
import img5 from "./../Contact/book/IMG_0497.jpg";
import image1 from '../asset/3.jpg';
import image2 from '../asset/4.jpg';
import image3 from '../asset/6.jpg';
import image4 from '../asset/8.jpg';
import image5 from '../asset/5.jpg';
import image6 from '../asset/6.jpg';
import image7 from '../asset/3.jpg';
import image8 from '../asset/1.jpg';
import image9 from '../asset/9.jpg';



export default class Carousel extends Component {
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
      <div>

        <Slider {...settings} className={classes.ak}>



          <div>
            <Card img={image2}></Card>
          </div>

          <div>
            <Card img={image3}></Card>
          </div>

          <div>
            <Card img={image4}></Card>
          </div>

          <div>
            <Card img={image5}></Card>
          </div>

          <div>
            <Card img={image6}></Card>
          </div>


          <div>
            <Card img={image7}></Card>
          </div>

          <div>
            <Card img={image8}></Card>
          </div>

          <div>
            <Card img={image9}></Card>
          </div>

        </Slider>
      </div>
    );
  }
}