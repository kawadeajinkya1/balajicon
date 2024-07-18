import classes from './Vis.module.css';
import Vision from './pix/vision.png';
import ISOpdf from './../Enqiry/pdf/pf.pdf';

import Mission from './pix/focus.png';

const Vis = () => {
    return (<div className={classes.contain}>

        <p className={classes.head}>WE STRIVE FOR PERFECTION !</p>
        <hr color='red' width='71rem' className={classes.line}></hr>
        <div className={classes.hold}>

            <div className={classes.card}>
                <p className={classes.cardHead}><img src={Vision} className={classes.icon}></img> OUR VISSION</p>
                <p className={classes.cardtxt}>Our vision is to provide satisfactory services to different industries of the commercial world. We believe in perfection in every single aspect of construction. Being a renowned warehouse construction company, not only in Pune but indeed in entire India. The vision of SBIC Pvt Ltd is wide and includes the welfare of the entire society.</p>
            </div>

            <div className={classes.card}>
                <p className={classes.cardHead}><img src={Mission} className={classes.icon}></img> OUR MISSION</p>
                <p className={classes.cardtxt}>We understand our responsibilities very well and work according to that to provide quality work in terms of facade work in construction and other construction and engineering requirements of warehouses, manufacturing plants, industrial units, packaging units, dedicated machines, complicated plants etc.</p>
            </div>
        </div>
        <div className={classes.holds}>
            <p className={classes.profile}>COMPANY PROFILE </p>
            <hr color='red' width='71rem' className={classes.line}></hr>
            <div className={classes.isoHold}>
                <center><embed src={ISOpdf} width="80%" height="600"
                    type="application/pdf"></embed></center>
            </div>

            <p className={classes.btn}><center><a href={ISOpdf} download className={classes.btn}> CLICK HERE TO DOWNLOAD COMPANY PROFILE    </a> </center></p>

        </div>
    </div>
    )
}

export default Vis;