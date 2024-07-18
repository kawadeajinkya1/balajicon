import classes from './Expertise.module.css';
import Card from './Card';
import Shed from './../Home/asset/industria shed.jpg';
import Industrial from './asset/civil works.jpg';
import Machine from './asset/machine.jpg';
import Treemax from './asset/treemax.jpg';
import Road from './asset/road.jpg';
import Turnkey from './asset/turnkey.jpg';
import Interior from './asset/interior.jpg';
import Warehouse from './asset/warehouse.jpg';
import Fabrication from './asset/factory-shed-fabrication-services.jpg';
import Epoxy from './asset/epoxy.jpg';
import {Link} from  'react-router-dom';


const Expertise = () => {
    return (
        <div className={classes.hold}>
            <p className={classes.head}>Our Areas Of Expertise</p>
            <p className={classes.head2}>We are one of the leading industrial contractors in India who is known to provide highly cost-efficient and customised prefabricated sheds and pre engineer building structures. We offer a wide array of services and products to fulfil the construction requirements of industries of different sectors. So whether you are the owner of a warehouse or wanted to start a new industry or seeking any other kind of industrial construction you can give us a chance to serve you with our quality products. Our offerings include-</p>
            <hr color='red' width='71rem'></hr>

            <div className={classes.cardhold}>
            <Link to='/PrefabricatedSheds' className={classes.f}><Card image={Shed} txt='Prefabricated Sheds'></Card></Link>
            <Link to='/Civilwork' className={classes.f}><Card image={Industrial } txt='Industrial Civil Work'></Card></Link>
            <Link to='/MachineFoundations' className={classes.f}><Card image={Machine} txt='Machine Foundation'></Card></Link>
            <Link to='/Treemax' className={classes.f}><Card image={Treemax} txt='Treemax Flooring'></Card></Link>

            <Link to='/Treemax' className={classes.f}><Card image={Road} txt='Road Construction Work'></Card></Link>
            <Link to='/Turnkey' className={classes.f}><Card image={Turnkey} txt='Turnkey projects Solutions'></Card></Link>
            <Link to='/Interior' className={classes.f}><Card image={Interior} txt='Industrial Interior work'></Card></Link>
            <Link to='/Warehouse' className={classes.f}><Card image={Warehouse} txt='Warehouse Constructions'></Card></Link>
            <Link to='/PEB' className={classes.f}><Card image={Fabrication} txt='PEB & Heavy Fabrication Works '></Card></Link>
            <Link to='/Factory' className={classes.f}><Card image={Epoxy} txt='Epoxy Painting Work '></Card></Link>
                
            </div>
        </div>
    )
}

export default Expertise;