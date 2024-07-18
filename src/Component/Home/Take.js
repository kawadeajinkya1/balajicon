
import classes from './Take.module.css';
import Balaji from './../Foot/sign/take.jpeg';
import Fade from 'react-reveal/Fade';


const Take = () => {
    return <div className={classes.hold}>

        <div className={classes.contentHold}>
            <Fade >
                <div className={classes.txtHold}>
                    <div className={classes.headhold}>
                        <span className={classes.head}>WE BELIEVE IN QUALITY & SAFETY</span>
                    </div>
                </div>
            </Fade>

            <Fade >
                <div className={classes.imgHold}>
                {/*  <center> <img src={Balaji} className={classes.BalajiImg}></img> </center> */}
                </div>
            </Fade>


        </div>
    </div>
};

export default Take;