import React from "react";
import Slider from "react-slick";
import Rcard from "./Rcard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./Rsli.module.css";
import girl from './asset/woman.png';
import man from './asset/man.png';

const Rsli = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (

        <div className={classes.rsl}>

            <Slider {...settings}>
                <div>
                    <Rcard imgg={girl} name='Chandrashekar Indi (IndiTech Valves Pvt Ltd)' txt='I have found SBIC Pvt Ltd to be a responsible, organized and timely contractor that works proactively to resolve potential issues before they occur. In my experience, they have always conducted themselves with the highest level of integrity.
                             I would absolutely recommend them for public works or private projects .'
                        rate='4.4' date='June 02 2019'></Rcard>
                </div>
                <div>
                    <Rcard imgg={girl} name='Sudhir Bahirgonde (Pranjali Forgings Pvt Ltd)'
                        txt='We are pleased to certify to their technical competence and their excellent capacity to co-ordinate with Architects, Clients (us) and other agencies which contributed in large measure to timely completion and commissioning of the Sugar Plant.
                                We wish them all success and in their future endeavors'
                        rate='4.0' date='Sept 09 2020'></Rcard>
                </div>
                <div>
                    <Rcard imgg={girl} name='Arun Shegokar (Mersen India Pvt Ltd)'
                        txt='We found their work to be of a high standard, especially the finishes. Their enthusiastic approach impressed us, as also the systematic methodology they maintained at site during construction.
                                 We have no hesitation in recommending them to your attention pport was excellent'
                        rate='4.3' date='July 11 2019'></Rcard>
                </div>
                <div>
                    <Rcard imgg={man} name='Neeraj M Unot (Kaygee Foam Pvt Ltd)'
                        txt='The project went very smoothly, especially as there was children on site for the first four weeks.
                                 Overall an excellent outcome and as a school we were very happy with the project'
                        rate='3.9' date='Augest 08 2019'></Rcard>
                </div>
                <div>
                    <Rcard imgg={man} name='Sachin Jadhav (John Deere)'
                        txt=' They are a financially sound organization with adequate Engineering back ground, field staff and construction machinery.
                                We are extremely satisfied with the quality of their work and would recommend them for execution of major projects without hesitation.'
                        rate='4.6' date='Sept 01 2019'></Rcard>
                </div>
                <div>
                    <Rcard imgg={man} name='ASHOK KAMBLE'
                        txt='I have been very impressed with Sri Balajee Constructions performance on this project. They are well-organized and run a clean, efficient job-site,
                                 Mr. Santosh Hirmukhe (director) have been great to work with.'
                        rate='5.0' date='Oct 11 2020'></Rcard>
                </div>



            </Slider>
        </div>

    );
}

export default Rsli;
