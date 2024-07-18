import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';
import logoo from './IMAGE/Logo.png';

function Nav() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logoo} className={classes.img1}></img>
        </div>
        <center>
          <div>

            <div className={classes.tea}>
              <p className={classes.nb}> <span className={classes.or}>S</span>RI <span className={classes.or}>&nbsp;B</span>ALAJEE INDUSTRIAL CONSTRUCTIONS PVT.LTD</p>
            </div>


            <div className={classes.blinklist}>

              <ul className={classes.blinklist}>
                <li><Link to='/' className={classes.lit}>HOME</Link></li>
                <li><Link to='/Aboutus' className={classes.li}>ABOUT</Link></li>
                <div className={classes.dropdown}>
                  <Link to='/Services' className={classes.li}>SERVICES </Link>
                  <div className={classes.dropdownContent}>
                    <a href='/Turnkey'> TURNKEY PROJECT SERVICE</a>
                    <a href='/Civilwork'>CIVIL WORKS </a>
                    <a href='/PEB'>PEB & HEAVY FABRICATION WORKS</a>
                    <a href='/MachineFoundations'>MACHINE FOUNDATIONS</a>
                    <a href='/Treemax'>TREEMAX FLOORING/ ROAD CONSTRUCTIONS WORKS</a>
                    <a href='/Warehouse'>WAREHOUSE CONSTRUCTIONS</a>
                    <a href='/Aluminum'>ALUMINUM WORK (FACADE SYSTEM)</a>
                    <a href='/PrefabricatedSheds'>PREFABRICATED SHEDS</a>
                    <a href='/Factory'>FACTORY SHED FABRICATION SERVICES</a>
                    <a href='/Interior'>INDUSTRIAL INTERIOR WORKS</a>
                  </div>
                </div>


                <li><Link to='/OurClients' className={classes.li}>CLIENTS</Link></li>
                <li><Link to='/Projects' className={classes.li}>PROJECT</Link></li>
                <li><Link to='/Enquiry' className={classes.li}>ENQUIRY</Link></li>
                <li><Link to='/Contact' className={classes.li}>CONTACT</Link></li>

              </ul></div>
          </div>

        </center>

      </div>
    </div>
  )
}


export default Nav

