import classes from './Service.module.css';
import AboutCard from './AboutCard';
import {Link} from 'react-router-dom';

const Service = () => {
    return (<div className={classes.contain}>
        <p className={classes.mainhead}>PREMIUM-QUALITY SERVICES AT AFFORDABLE RATES!</p>
        <hr color='red' width='71rem'></hr>
        <div className={classes.hold}>

            <div className={classes.top}>
           <Link to='/Turnkey' className={classes.f}><AboutCard head='Turnkey Project Service' txt='We have sound experience in turnkey projects as well, where we execute every single task from purchase to construction and deliver quality results as per the demand of the buyer.'></AboutCard>   </Link>
            <Link to='/Civilwork' className={classes.f}><AboutCard head='Civil Works' txt='We have diverse experience as a leading civil contractor. Balaji Construction is known for quality work in different civil projects like- Land development, roads, bridges, educational institutes, government organisations, etc.'></AboutCard> </Link>
            <Link to='/PEB' className={classes.f}><AboutCard head='PEB Fabrication Works' txt='We have vast experience in heavy fabrication works. Our expert technicians know modern-day technology and work as per the requirements of different industries.'></AboutCard>  </Link>
                
            </div>


            <div className={classes.middle}>
            <Link to='/Aluminum' className={classes.f}><AboutCard head='Aluminum Work' txt='We have expert technicians for aluminium work as well, which is commonly known as Facade System. So whether you need aluminium coils, panel structure, curtains, fell ceiling or any other such product you can connect us.'></AboutCard> </Link>
            <Link to='/PrefabricatedSheds' className={classes.f}><AboutCard head='Prefabricated Sheds' txt='We are leading suppliers of the ready to install sheds. Prefabricated sheds can be used as a robust roofing solution for a manufacturing plant, a warehouse, a building for a parking space.'></AboutCard> </Link>
            <Link to='/Factory' className={classes.f}><AboutCard head='Factory Shed Fabrication Services' txt='We offer a wide range of ready to install factory sheds that you can comfortably install in your plant. Along with that we also offer customised fabrication as per the requirement of the clients.'></AboutCard> </Link>


            </div>


            <div className={classes.bottom}>
            <Link to='/Treemax' className={classes.f}>     <AboutCard head='Treemax Flooring' txt='We are a reputed name when it comes to the tree max flooring and road construction works. In the past six years, we have successfully completed several projects related to this kind of construction work.'></AboutCard> </Link>
            <Link to='/Warehouse' className={classes.f}>     <AboutCard head='Warehouse Constructions' txt="We understand the structure of a warehouse very well and have an expert team to design highly customised warehouses. Balaji Construction is one of the leading names for the construction of refrigerated and dry warehouses."></AboutCard> </Link>
            <Link to='/MachineFoundations' className={classes.f}>     <AboutCard head='Machine Foundations' txt='We have the complete knowledge of working conditions, heavy loads, speed and operating conditions of different machines. Due to this reason, we are able to provide perfect machine foundations for the different high-tech machines.'></AboutCard> </Link>
            </div>
        
        </div >
    </div>
    )
}

export default Service;