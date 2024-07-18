import React from 'react';
import classes from './Galler.module.css';
import i1 from './../Project/pic/pro1.jpg';
import i2 from './pic/pro2.jpg';
import i3 from './pic/pro3.jpg';
import i4 from './pic/pro4.jpg';
import i5 from './pic/pro5.jpg';
import i6 from './pic/pro6.jpg';

const Galler = () => {
  return (
    <div className={classes.qa}>
<div className={classes.aq}>  

<center>
    <br/> 
    <p className={classes.head}>OUR PROJECT</p>
       <hr color='red' width='71rem' className={classes.headkk}></hr>
            <p className={classes.head2}>We maintain a level of transparency in all our dealing, clients can opt for payments option in cash, cheque, or DD, which has further, made us the reputed enterprise in the domain.
            In order to store products in well- coordinated manner, we have a team of skill storekeepers, which helps us in storing these products in unharmed manner. Leading with the team of adroit workers, we have developed 
a state-of-the-art manufacturing unit that is spread over a wide area</p>
         

<br/>


<div className={classes.row}>

<div className={classes.col}>
    
    <img className={classes.mg} src={i1}></img>
   

</div>
<div className={classes.col}>
    
    <img className={classes.mg}  src={i2}></img>
    

</div>

<div className={classes.col}>
    
    <img className={classes.mg} src={i3}></img>


</div>

    </div>

<br/>
<div className={classes.row}>

<div className={classes.col}>
    
    <img className={classes.mg} src={i5}></img>
   

</div>
<div className={classes.col}>
    
    <img className={classes.mg}  src={i6}></img>
 

</div>
<div className={classes.col}>
    

    
    <img className={classes.mg} src={i4}></img>
    

</div> 
</div>

</center>
</div>



    </div>
  )
}

export default Galler