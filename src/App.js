// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from 'react-router-dom';

// // import Home from './Pages/Home';
// // import Contact from './Pages/Contact';
// // import RootLayout from './Pages/RootLayout';
// // import Services from './Pages/Services';
// // import OurClients from './Pages/OurClients';
// // import Aboutus from './Pages/AboutUs';
// // import Enquiry from './Pages/Enquiry'; 
// // import Project from './Pages/Project';

// // import Turnkey from './Component/Services/Turnkey/Turnkey';
// // import CivilWork from './Component/Services/CivilWork/CivilWork';
// // import PEB from './Component/Services/PEB/PEB';
// // import MachineFoundations from './Component/Services/Machine/Machine';
// // import Treemax from './Component/Services/Treemax/Treemax';
// // import Warehouse from './Component/Services/Warehouse/Warehouse' ;
// // import Aluminum from './Component/Services/Aluminium/Aluminum';
// // import PrefabricatedSheds from './Component/Services/Prefrabricated/Prefabricated';
// // import Factory from './Component/Services/Factory/Factory';
// // import Interior from './Component/Services/Interior/Interior';

// // import Navi from './Component/Nav/Navi';

// // const router = createBrowserRouter([{
// //   path: '/',
// //   element: <RootLayout></RootLayout>,

// //   children: [
// //     { path: '', element: <Home></Home> },
// //     { path: '/Services', element: <Services></Services> },
// //     { path: '/Aboutus', element: <Aboutus></Aboutus> },
// //     {path: '/OurClients', element: <OurClients></OurClients> },
// //     {path : '/Projects' , element : <Project></Project>},
// //     {path: '/Contact', element: <Contact></Contact> },
// //     {path: '/Enquiry', element:<Enquiry></Enquiry>},

// //     {path : "/Turnkey", element:<Turnkey/> },
// //     {path :"/Civilwork",element :<CivilWork></CivilWork>},
// //     {path :"/PEB",element :<PEB></PEB>},
// //     {path :"/MachineFoundations",element :<MachineFoundations></MachineFoundations>},
// //     {path :"/Treemax",element:<Treemax></Treemax>},
// //     {path :'/Warehouse', element:<Warehouse></Warehouse>},
// //     {path :'/Aluminum', element:<Aluminum></Aluminum>},
// //     {path :'/PrefabricatedSheds',element:<PrefabricatedSheds></PrefabricatedSheds>},
// //     {path :'/Factory',element:<Factory></Factory>},
// //     {path :'/Interior',element:<Interior></Interior>},


// //     {path :'/Navi',element:<Navi></Navi>}
// //   ]
// // }]);


// // const App = () => {
// //   return <RouterProvider router={router}></RouterProvider>

// // };

// // export default App;




// import {
//   createHashRouter,
//   RouterProvider,
// } from 'react-router-dom';

// import Home from './Pages/Home';
// import Contact from './Pages/Contact';
// import RootLayout from './Pages/RootLayout';
// import Services from './Pages/Services';
// import OurClients from './Pages/OurClients';
// import Aboutus from './Pages/AboutUs';
// import Enquiry from './Pages/Enquiry';
// import Project from './Pages/Project';

// import Turnkey from './Component/Services/Turnkey/Turnkey';
// import CivilWork from './Component/Services/CivilWork/CivilWork';
// import PEB from './Component/Services/PEB/PEB';
// import MachineFoundations from './Component/Services/Machine/Machine';
// import Treemax from './Component/Services/Treemax/Treemax';
// import Warehouse from './Component/Services/Warehouse/Warehouse';
// import Aluminum from './Component/Services/Aluminium/Aluminum';
// import PrefabricatedSheds from './Component/Services/Prefrabricated/Prefabricated';
// import Factory from './Component/Services/Factory/Factory';
// import Interior from './Component/Services/Interior/Interior';

// import Navi from './Component/Nav/Navi';

// const router = createHashRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: '/Services', element: <Services /> },
//       { path: '/Aboutus', element: <Aboutus /> },
//       { path: '/OurClients', element: <OurClients /> },
//       { path: '/Projects', element: <Project /> },
//       { path: '/Contact', element: <Contact /> },
//       { path: '/Enquiry', element: <Enquiry /> },

//       { path: '/Turnkey', element: <Turnkey /> },
//       { path: '/Civilwork', element: <CivilWork /> },
//       { path: '/PEB', element: <PEB /> },
//       { path: '/MachineFoundations', element: <MachineFoundations /> },
//       { path: '/Treemax', element: <Treemax /> },
//       { path: '/Warehouse', element: <Warehouse /> },
//       { path: '/Aluminum', element: <Aluminum /> },
//       { path: '/PrefabricatedSheds', element: <PrefabricatedSheds /> },
//       { path: '/Factory', element: <Factory /> },
//       { path: '/Interior', element: <Interior /> },

//       { path: '/Navi', element: <Navi /> }
//     ]
//   }
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;



import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import RootLayout from './Pages/RootLayout';
import Services from './Pages/Services';
import OurClients from './Pages/OurClients';
import Aboutus from './Pages/AboutUs';
import Enquiry from './Pages/Enquiry';
import Project from './Pages/Project';

import Turnkey from './Component/Services/Turnkey/Turnkey';
import CivilWork from './Component/Services/CivilWork/CivilWork';
import PEB from './Component/Services/PEB/PEB';
import MachineFoundations from './Component/Services/Machine/Machine';
import Treemax from './Component/Services/Treemax/Treemax';
import Warehouse from './Component/Services/Warehouse/Warehouse';
import Aluminum from './Component/Services/Aluminium/Aluminum';
import PrefabricatedSheds from './Component/Services/Prefrabricated/Prefabricated';
import Factory from './Component/Services/Factory/Factory';
import Interior from './Component/Services/Interior/Interior';

import Navi from './Component/Nav/Navi';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [ 
      { path: '', element: <Home /> },
      { path: '/Services', element: <Services /> },
      { path: '/Aboutus', element: <Aboutus /> },
      { path: '/OurClients', element: <OurClients /> },
      { path: '/Projects', element: <Project /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Enquiry', element: <Enquiry /> },

      { path: '/Turnkey', element: <Turnkey /> },
      { path: '/Civilwork', element: <CivilWork /> },
      { path: '/PEB', element: <PEB /> },
      { path: '/MachineFoundations', element: <MachineFoundations /> },
      { path: '/Treemax', element: <Treemax /> },
      { path: '/Warehouse', element: <Warehouse /> },
      { path: '/Aluminum', element: <Aluminum /> },
      { path: '/PrefabricatedSheds', element: <PrefabricatedSheds /> },
      { path: '/Factory', element: <Factory /> },
      { path: '/Interior', element: <Interior /> },

      { path: '/Navi', element: <Navi /> }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;