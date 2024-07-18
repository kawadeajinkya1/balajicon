import React, { Component } from "react";
import classes from './BlockCard.module.css';
import Block from "./Block";
import { Link } from 'react-router-dom';
import img1 from './../Home/asset/cost.png';
import img2 from './../Home/asset/appeal.png';
import img3 from './../Home/asset/bird.png';
import img4 from './../Home/asset/no-water.png';
import img5 from './../Home/asset/roof.png';
import img6 from './../Home/asset/longlife.png';
import img7 from './../Home/asset/maintenance.png';
import img8 from './../Home/asset/spans.png';



import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const BlockCard = () => {
    return (
        <div className={classes.hold}>

            <h3 className={classes.head}>ADVANTAGES OF SBIC PVT LTD</h3>
            <Fade left>
                <div className={classes.row}>

                <div className={classes.ekj}>
                    <div>
                        <Block img={img1} head='COST EFFECTIVE'  ></Block>
                    </div>
                    <div>
                        <Block img={img2} head='AESTHETICALLY APPEALING' ></Block>
                    </div>
                    </div>
                    <div className={classes.ekj}>
                    <div>
                        <Block img={img3} head='NO BIRD NOISES' ></Block>
                    </div>
                    <div>
                        <Block img={img4} head='NO WATER LEAK' ></Block>
                    </div>
                    </div>


                </div>
            </Fade>

            <Fade right>
                <div className={classes.row}>
                <div className={classes.ekj}>
                    <div>
                        <Block img={img5} head='FASTEST ROOFING SOLUTION'  ></Block>
                    </div>
                    <div>
                        <Block img={img6} head='LONG LIFE'  ></Block>
                    </div>
                    </div>
                    <div className={classes.ekj}>
                    <div>
                        <Block img={img7} head='ZERO MAINTENANCE' ></Block>

                    </div>
                    <div>
                        <Block img={img8} head='CLEAR UNOBSTUCTED SPANS'></Block>

                    </div>
</div>

                </div>
            </Fade>

        </div>
    )
};

export default BlockCard;