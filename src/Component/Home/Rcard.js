import React from 'react';
import classes from "./Rcard.module.css";

const Rcard = (props) => {
    return <div className={classes.contain}>
  
<center>
  <div className={classes.card}>
<div className={classes.cardcontent}>
  <center>
    <br/>
<img className={classes.imgg} src={props.imgg}></img>
<br></br>
    <p className={classes.name}>{props.name}</p>
    <p className={classes.stars}>★★★★★</p>
    <p className={classes.txt}>{props.txt}</p>
    <p className={classes.review}>{props.review}</p>
    
  
    
    </center><br></br>

</div>
    </div>
    </center>
    </div>
};

export default Rcard