import classes from './Treemax.module.css';
import Fade from 'react-reveal/Fade';

import img1 from './../cart/Qualiity.png';
import img2 from './../cart/smart.png';
import img3 from './../cart/tech.png';
import { useEffect } from 'react';
import Banner4 from './Banner4';

const Treemax = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <div>
        <Banner4 />
        <div className={classes.hold}>

            <div className={classes.left}>
                <Fade left>
                    <div className={classes.leftHead}>Turnkey Project Service / Solutions:</div>
                </Fade>
                <div className={classes.L1}>
                    <Fade right>
                        <p>We have sound experience in turnkey projects as well,
                            where we execute every single task from purchase to construction and
                            deliver quality results as per the demand of the buyer.</p>
                    </Fade>
                </div>
                <Fade right>
                    <div className={classes.L1}><p>SBIC Pvt Ltd counted as one of the leading service provider engaged in rendering superior quality Industrial Turnkey Project Services to our valuable clients.
                        The offered Industrial Turnkey Project Services are highly appreciated for their timeliness, reliability, flexibility and professional approach.
                        We regularly communicate with our clients to understand their diverse needs and budgetary concerns.</p></div>
                </Fade>
                <Fade right>
                    <div className={classes.L1}><p>SBIC Pvt Ltd counted as one of the leading service provider engaged in rendering superior quality Industrial Turnkey Project Services to our valuable clients.
                        Our professionals guide us throughout the business endeavors that further help us to provide satisfactory Industrial Turnkey Project services.
                        Every construction project is different in its own way. Sometimes you go for attractive looks while sometimes you go for strength and durability.
                        In the case of industrial construction strength and durability are the paramount factors that decide the quality of any construction. Due to this reason, the trend of Treemax Flooring became prevalent in the market. It provides a sound base to any structure. When you are searching for top civil contractors in Pune then choose Balaji as we are the best when it comes to Treemax flooring and road construction work.</p></div>
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

export default Treemax;