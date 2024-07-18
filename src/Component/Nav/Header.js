import classes from "./Header.module.css";
import image from "./IMAGE/email.png";
import image2 from "./IMAGE/smartphone (1).png";
function Header() {
    return (
        <div className={classes.overall}>

            <div className={classes.main}>
                <div className={classes.email} ><img src={image} className={classes.img} /><a href="mailto:info@balajiconstruction.in" className={classes.tdecor}> info@balajiconstruction.in</a></div> &emsp;&emsp;
                <div className={classes.mobile}><img src={image2} className={classes.img} /><a href="tel:9028079000" className={classes.tdecor}> Mr. Santosh Hirmukhe(Director): +919028079000</a></div>

            </div>

        </div>
    );
};
export default Header;