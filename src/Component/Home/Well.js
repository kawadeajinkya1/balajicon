import React from 'react';
import classes from './Well.module.css';
import di1 from './asset/design.png';
import di2 from './asset/maintain.png';
import di3 from './asset/quality.png';
import di4 from './asset/supply.png';
import di5 from './asset/pho1.jpg';

import const2 from '../asset/const11.jpeg';

const Well = () => {
      return (
            <div>
                  <div className={classes.wlc}>


                        <div className={classes.wl}>
                              <center>
                            <div className={classes.bs}> <h6 className={classes.head}>WHAT <span className={classes.heads}>DISTINGUISHES </span> US FROM <span className={classes.heads}> OTHER PEOPLE </span></h6></div> 
                                    <img src={const2} className={classes.i}></img>
                              </center>
                        </div>



                        <div className={classes.wr}>

                        <div className={classes.bbs}> <h6 className={classes.head}>WHAT <span className={classes.heads}>DISTINGUISHES </span> US FROM <span className={classes.heads}> OTHER PEOPLE </span></h6></div>

                              <p className={classes.par}>This is the most prominent question that may arise in the mind of anyone. If you are also thinking like that, it is obvious. In order to answer this question all, we have to say that- we are much ahead of our peers in terms of technology and experience. So all those factors that make us different are-</p>


                              <div className={classes.blks}>

                                    <div className={classes.row}>



                                          <div className={classes.b1}>

                                                <div className={classes.im}>

                                                      <img src={di1} className={classes.img} />

                                                </div>

                                                <div className={classes.im2}>

                                                      <p className={classes.bh1} > BEST DESIGN </p>
                                                      <p className={classes.bh2} >We will provide you with a highly cost-efficient design.</p>

                                                </div>

                                          </div>




                                          <div className={classes.b1}>

                                                <div className={classes.im}>

                                                      <img src={di2} className={classes.img} />

                                                </div>

                                                <div className={classes.im2}>

                                                      <p className={classes.bh1} > MAINTENANCE </p>
                                                      <p className={classes.bh2} > You don't have to bother about water leaks or maintenance for several years.</p>

                                                </div>



                                          </div>

                                    </div>

                                    <div className={classes.row}>

                                          <div className={classes.b1}>

                                                <div className={classes.im}>

                                                      <img src={di3} className={classes.img} />

                                                </div>

                                                <div className={classes.im2}>

                                                      <p className={classes.bh1} > QUALITY </p>
                                                      <p className={classes.bh2} > Quality material is used to provide long life to the structures. </p>

                                                </div>


                                          </div>

                                          <div className={classes.b1}>

                                                <div className={classes.im}>

                                                      <img src={di4} className={classes.img} />

                                                </div>

                                                <div className={classes.im2}>

                                                      <p className={classes.bh1} > SUPPLIER </p>
                                                      <p className={classes.bh2} >Qualities of the supplier affect how it can meet demands. </p>

                                                </div>

                                          </div>


                                    </div>


                              </div>



                        </div>






                  </div>
            </div>
      )
}


export default Well
