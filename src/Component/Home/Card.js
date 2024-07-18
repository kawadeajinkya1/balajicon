import classes from './Card.module.css';


const Card = (props) => {
    return (
        <div className={classes.card}>
            <img src={props.image} className={classes.image}></img>
            <p className={classes.txt}>{props.txt}</p>
        </div>
    )
}

export default Card;