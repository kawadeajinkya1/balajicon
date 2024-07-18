import classes from './Footer.module.css';
import logo from './../Nav/IMAGE/Logo.png';
import mail from './sign/email.png';
import location from './sign/location.png';
import cell from './sign/smartphone.png';
import heart from './sign/hurt.gif';
import { Link } from 'react-router-dom';

import fb from './sign/facebook.png';
import li from './sign/linkedin.png'
import tw from './sign/twitter.png';
import pi from './sign/pinterest.png';
import In from './sign/instagram.png';

import mail2 from './sign/mail2.png';
import mob2 from './sign/smartphone2.png';

import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    return <div className={classes.container}>
        <div className={classes.hold}>

            <div className={classes.left}>
                <div className={classes.leftImgHold}>
                    <img src={logo} className={classes.leftImg}></img>
                </div><br></br>
                <div className={classes.leftTxtHold}>
                    <span className={classes.leftTxt}>SBIC Pvt Ltd is a leading company to provide trustworthy services to fulfil the ever-increasing demand for infrastructure in the Industrial world. </span></div>
            </div>



            <div className={classes.middle}>
                <div className={classes.middleheadHold}>
                    <span className={classes.middlehead}>QUICK LINKS</span>
                    <hr className={classes.line}></hr>
                </div>
                <div className={classes.middlelistHold}>
                    <ul className={classes.middlelist}>
                        <li className={classes.li}><Link to='/' className={classes.li}>HOME</Link></li>
                        <li className={classes.li}><Link to='/Aboutus' className={classes.li}>ABOUT</Link></li>
                        <li className={classes.li}><Link to='/OurClients' className={classes.li}>CLIENT</Link></li>
                        <li className={classes.li}><Link to='/services' className={classes.li}>SERVICES</Link></li>
                        <li className={classes.li}><Link to='/contact' className={classes.li}>CONTACT Us</Link></li>
                    </ul>
                </div>
            </div>



            <div className={classes.middle}>
                <div className={classes.middleheadHold}>
                    <span className={classes.middlehead}>SERVICES</span>
                    <hr className={classes.line}></hr>

                </div>
                <div className={classes.middlelistHold}>
                    <ul className={classes.middlelist}>
                        <li className={classes.li}><Link to='/Factory' className={classes.li}>Factory Shed </Link></li>
                        <li className={classes.li}><Link to='/Treemax' className={classes.li}>Treemax Flooring</Link></li>
                        <li className={classes.li}><Link to='/Warehouse' className={classes.li}>Warehouse Constructions</Link></li>
                        <li className={classes.li}><Link to='/Interior' className={classes.li}>Industrial Interior Works</Link></li>
                        <li className={classes.li}><Link to='/PrefabricatedSheds' className={classes.li}>Prefabricated Sheds</Link></li>
                    </ul>
                </div>
            </div>



            <div className={classes.middle}>
                <div className={classes.middleheadHoldajj}>
                    <span className={classes.middlehead}>SERVICES</span>
                    <hr className={classes.line}></hr>
                </div>
                <div className={classes.middlelistHold}>
                    <ul className={classes.middlelist}>

                        <li className={classes.li}><Link to='/Civilwork' className={classes.li}>Civil Work</Link></li>
                        <li className={classes.li}><Link to='/Aluminum' className={classes.li}>Aluminum Work</Link></li>
                        <li className={classes.li}><Link to='/PEB' className={classes.li}>PEB Fabrication Works</Link></li>
                        <li className={classes.li}><Link to='/Turnkey' className={classes.li}>Turnkey Project Service</Link></li>
                        <li className={classes.li}><Link to='/MachineFoundations' className={classes.li}>Machine Foundations</Link></li>
                    </ul>
                </div>
            </div>






            <div className={classes.right}>
                <div className={classes.rightheadHold}>
                    <span className={classes.righthead}>CONTACT DETAILS</span>
                    <hr className={classes.line}></hr>
                </div>

                <div>
                    <img src={mail} className={classes.rightlogo}></img>
                    <span>Office No A-314 Nyati Empress beside Giga space IT park Viman Nagar Pune Maharashtra 411014
                    </span>
                    <p>Office No:2 - Bhosari</p>
                    <p>Corporate Office: Viman Nagar</p>

                </div>
                <br></br>
                <div className={classes.mailHold}>
                    <img src={mail2} className={classes.rightlogo}></img>
                    <span><a className={classes.ab} href="mailto:info@balajiconstruction.in">info@balajiconstruction.in</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>

                <div>
                    <img src={mob2} className={classes.rightlogo}></img>
                    <span> <a className={classes.ab} href="tel:9158586860">+91&nbsp;7083079000</a></span>
                </div>
            </div>

        </div>
        <hr></hr>

        <div className={classes.iconHold}><center>
            <a href="https://www.facebook.com/people/Sri-Balajee-Industrial-Constructions-Pvt-Ltd/100064112640140/"><img src={fb} className={classes.iconHo}></img></a>&nbsp;
            <a href="https://www.linkedin.com/in/santosh-hirmukhe-7b88a9a8/"><img src={li} className={classes.iconHo}></img></a>
            <a href=""><img src={pi} className={classes.iconHo}></img></a>
            <a href="https://in.pinterest.com/balajiconstruction9000/"><img src={tw} className={classes.iconHo}></img></a>
            <a href="https://www.instagram.com/balajiconstruction9000/"><img src={In} className={classes.iconHo}></img></a></center>
        </div>
        <hr></hr>
        <div className={classes.copyHold}>
            <span className={classes.copy}>Copyright &#169; 2023 SBIC Pvt Ltd | Made with
                <img src={heart} className={classes.img}></img>by CORTICA WEB SOLUTIONS PVT LTD</span>
        </div>

    </div>
};

export default Footer;