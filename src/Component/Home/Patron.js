import classes from './Patron.module.css';


const Patron = (props) => {
    return <div className={classes.contain}>
      
            <div className={classes.imgHold}>
                <img src={props.img} className={classes.img}/>
            </div>
        </div>
};

export default Patron;