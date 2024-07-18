import classes from './Enqir.module.css';
import img1 from './../Home/asset/IMG_8160.jpg';



const Enqir=()=>{
    
   return <div className={classes.a}><br></br><br></br>
   
     <div className={classes.left}>
                <div className={classes.imgHold}>
                    <img src={img1} className={classes.img}></img>
                </div>
            </div>
     <div className={classes.c}>
        <center>
            <br></br><br></br><br></br><br></br>
        <form action='https://formsubmit.co/santosh@balajiconstruction.in' method='POST'>
           <br/>
            <input type='text' name='name' placeholder='Enter Your Name Here' className={classes.in}></input><br></br><br></br>
           
            <input type='email' name='email' placeholder='Enter Your Email Here' className={classes.in}></input><br></br><br></br>

            <input type='text' name='mobno'  placeholder='Enter Your Mobile No' className={classes.in}></input><br></br><br></br>
         <textarea name='message'  placeholder='Your Message For Us' className={classes.in}></textarea><br></br><br></br>

            <input type='hidden' name='_captcha' value='false' className={classes.in}></input>

            <button className={classes.button}>Submit</button>
        </form></center></div>
        <br></br><br></br><br></br> 
        
        
        
        </div>
};

export default Enqir;