import React, { Component } from "react";
import classes from './Patronslider.module.css';
import Slider from "react-slick";
import Patron from "./Patron";

import img1 from "./../Nav/IMAGE/l0.jpg";
import img2 from './../Nav/IMAGE/l1.jpg';
import img3 from './../Nav/IMAGE/l10.jpg';
import img4 from './../Nav/IMAGE/l11.jpg';
import img5 from './../Nav/IMAGE/l12.jpg';
import img6 from './../Nav/IMAGE/l13.jpg';
import img7 from './../Nav/IMAGE/l14.jpg';
import img8 from './../Nav/IMAGE/l15.jpg';
import img9 from './../Nav/IMAGE/l16.jpg';
import img10 from './../Nav/IMAGE/l2.jpg';
import img11 from './../Nav/IMAGE/l3.jpg';
import img12 from './../Nav/IMAGE/l4.jpg';
import img13 from './../Nav/IMAGE/l5.jpg';
import img14 from './../Nav/IMAGE/l6.jpg';
import img15 from './../Nav/IMAGE/l7.jpg';
import img16 from './../Nav/IMAGE/l8.jpg';
import img17 from './../Nav/IMAGE/l9.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Patronslider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                }]
        };
        return (
            <div className={classes.hold}>
                <h1 className={classes.head}>OUR PATRON </h1>
                <center> <hr className={classes.my}>
                </hr></center>
                <Slider {...settings}>
                    <div>
                        <Patron img={img1}></Patron>
                    </div>
                    <div>
                        <Patron img={img2} ></Patron>
                    </div>
                    <div>
                        <Patron img={img3} ></Patron>
                    </div>
                    <div>
                        <Patron img={img4} ></Patron>
                    </div>
                    <div>
                        <Patron img={img5} ></Patron>
                    </div>
                    <div>
                        <Patron img={img6} ></Patron>
                    </div>
                    <div>
                        <Patron img={img7} ></Patron>
                    </div>
                    <div>
                        <Patron img={img8} ></Patron>
                    </div>
                    <div>
                        <Patron img={img9} ></Patron>
                    </div>
                    <div>
                        <Patron img={img10} ></Patron>
                    </div>
                    <div>
                        <Patron img={img11} ></Patron>
                    </div>
                    <div>
                        <Patron img={img12} ></Patron>
                    </div>
                    <div>
                        <Patron img={img13} ></Patron>
                    </div>
                    <div>
                        <Patron img={img14} ></Patron>
                    </div>
                    <div>
                        <Patron img={img15} ></Patron>
                    </div>
                    <div>
                        <Patron img={img16} ></Patron>
                    </div>
                    <div>
                        <Patron img={img17} ></Patron>
                    </div>
                 

                </Slider>
            </div>
        );
    }
}
