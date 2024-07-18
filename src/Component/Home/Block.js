import classes from './Block.module.css';
import { Link } from 'react-router-dom';



const Block=(props)=>{
    return <div className={classes.contain }>

 <div className={classes.hold}>

            <div className={classes.imgHold}>
            <center>
                <img src={props.img} className={classes.img}></img>
                </center>
            </div>
          
            <div className={classes.headhold}>
                <span className={classes.head}>{props.head}</span>
            </div>

            <div className={classes.middle}>
    <span className={classes.text}>{props.text}</span>
        </div>

     
        </div>


     
    </div>


};


export default Block;