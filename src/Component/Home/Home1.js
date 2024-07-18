import classes from './Home1.module.css';
import Bala from './../Home/asset/cons4.jpg';
import const1 from '../asset/const1.jpeg';
import Fade from 'react-reveal/Fade';


const Home1 = () => {
    return <div className={classes.hold}>

        <div className={classes.contentHold}>
            <Fade left>
                <div className={classes.txtHold}>
                    <div className={classes.headhold}>
                        <span className={classes.head}>We transform your dreams into Structures!</span>
                    </div>
                    <span className={classes.txt}>We are one of the leading names in terms of industrial constructions. Whether you need a warehouse or an industrial shed, SBIC Pvt Ltd should be your first choice. Being a renowned platform in the sector of Industrial Construction we enjoy a recommendable position in the market because of our personalized management, highly experienced team of engineers and robust services.

                        SBIC Pvt Ltd should be your one and only choice whenever you look for highly customised industrial constructions. Be it’s your new warehouse or you wanted to renovate your existing one come to us to get the best engineering at the most affordable cost. Hence we can confidently say that we are one of the best industrial construction companies in India</span>
                </div>
            </Fade>

            <Fade right>
                <div className={classes.imgHold}>
                    <img src={const1} className={classes.BalaImg}></img>
                </div>
            </Fade>


        </div>
    </div>
};

export default Home1;