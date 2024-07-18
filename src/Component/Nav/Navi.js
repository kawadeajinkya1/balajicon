import React from 'react';
import { useState } from "react";
import "./Navi.css";


import  {Link}  from 'react-router-dom';

import logo2 from './IMAGE/Logo.png';

function Navi() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

    const resetNavbar = () => {
      setActive('nav__menu');
      setIcon('nav__toggler');
   
  };
  return (
    <div className="nasv">
    <nav className="nav">
     
     <div className='logo2'>
      <img src={logo2} className='img1'></img>
     </div>     

<div>
<p className='nb'> <span className='or'>S</span>RI <span className='or'>&nbsp;B</span>ALAJEE INDUSTRIAL CONSTRUCTIONS PVT.LTD</p>
<div>

</div>

<br></br>
<div className='nd'>

<div className={active}>
      <ul className='ul'>
      <li className="list"><Link to='/' className="list" onClick={resetNavbar}>HOME</Link></li>
      <li className="list"><Link to='/AboutUS' className="list" onClick={resetNavbar}>ABOUT</Link></li>
      <li>
         <div class="dropdown">
           <li className="list"><Link to='/Services' className="list" onClick={resetNavbar}>SERVICES</Link></li>
              <div className="dropdown-content">
          
               <li className="list1"> <Link to='/Turnkey' onClick={resetNavbar}> TURNKEY PROJECT SERVICE</Link></li>  
               <li className="list1">  <Link to='/Ciilwork' onClick={resetNavbar}>CIVIL WORKS</Link></li>  
               <li className="list1"> <Link to='/PEB' onClick={resetNavbar}>PEB & HEAVY FABRICATION WORKS</Link></li>  
               <li className="list1">  <Link to='/MachineFoundations' onClick={resetNavbar}>MACHINE FOUNDATIONS</Link></li>  
               <li className="list1"> <Link to='/Treemax' onClick={resetNavbar}>TREEMAX FLOORING/ ROAD CONSTRUCTIONS WORKS</Link></li>  
               <li className="list1"> <Link to='/Warehouse' onClick={resetNavbar}>WAREHOUSE CONSTRUCTIONS</Link></li>  
               <li className="list1"> <Link to='/Aluminum' onClick={resetNavbar}>ALUMINUM WORK (FACADE SYSTEM)</Link></li>  
                <li className="list1">  <Link to='/PrefabricatedSheds' onClick={resetNavbar}>PREFABRICATED SHEDS</Link></li>  
                <li className="list1"><Link to='/Factory' onClick={resetNavbar}>FACTORY SHED FABRICATION SERVICES</Link></li>  
                <li className="list1"> <Link to='/Interior' onClick={resetNavbar}>INDUSTRIAL INTERIOR WORKS</Link></li>  
                                           
                   </div>
              </div>

         </li>


        <li className="list"><Link to='/OurClients' className="list" onClick={resetNavbar}>CLIENTS</Link></li>
        <li className="list"><Link to='/Projects' className="list" onClick={resetNavbar}>PROJECT</Link></li>
        <li className="list"><Link to='/Enquiry' className="list" onClick={resetNavbar}>ENQUIRY</Link></li>
        <li className="list"><Link to='/Contact' className="list" onClick={resetNavbar}>CONTACT</Link></li>

      </ul>
      </div>
      </div>
      </div>

  


      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    </div>
  );
}

export default Navi;