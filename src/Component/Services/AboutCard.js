import classes from './AboutCard.module.css';
import customer from './cart/customer-service.png';

const AboutCard = (props) => {
    return (
        <div className={classes.card}>
            <img src={customer} alt='' className={classes.customer}></img>
            <p className={classes.head}>{props.head}</p>
            <p className={classes.txt}>{props.txt}</p>
            <br/>
           <center> <div className={classes.bnno}>Learn More</div> </center>
        </div>
    )
}

export default AboutCard;