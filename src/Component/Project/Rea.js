import classes from './Rea.module.css';
import {Link} from 'react-router-dom';
import { dom } from '@fortawesome/fontawesome-svg-core';

const Rea=()=>{
    return <section className={classes.main}> 
            
    <h1>For any queries please feel free to talk with us </h1><br/>
    
    <div className={classes.c}><Link to='/Contact' className={classes.d}> CONTACT US! </Link></div>
    
              
            </section>
};


export default Rea;