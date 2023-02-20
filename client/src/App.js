import Header from "./Components/Layout/Header.js"
import ChallengeSummary from "./Components/MountainsInfo/MountainsInfo.js";
import MountainList from './Components/MountainsInfo/MountainList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment} from "react";
import classes from "./App.css" ;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FurtherInformationPage from "./Pages/FurtherInformation.js";
import Home from "./Pages/Home.js";
import RootLayout from "./Pages/Root.js";
import ErrorPage from "./Pages/Error.js";
import UsefulStuff from "./Pages/Useful.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { 
    path: '/', 
    element: <Home/>
  },
  { 
    path: '/furtherInformation/:id', 
    element: <FurtherInformationPage/> 
  },

  { 
    path: '/usefulStuff', 
    element: <UsefulStuff/> 
  }
    ]
  },
  
  
])

function App() {

  return (
    
  <main>
<RouterProvider router={router}/>
  </main>
       )
}

export default App;

{/* 
//      <div className="App">      
//           <h2>About This Map</h2>
//       <p>The map below shows all of the fells in the Lake District. Only hills with more than 30 m relative height (rising over 98 ft) are included. This includes most, but not all, Wainwrights 
//         as well as many other hills.Hills are grouped as topographically as possible, according to their 'parent Marilyn'. The parent Marilyn of hill A can be found by dividing the nearby area into territories, by tracing the runoff from the key col of each Marilyn. The parent is the Marilyn whose territory hill A resides in.</p>

// onCheck={handleCheck} entries={entries}

//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     const fetchEntries = async () => {
//       const response = await fetch('http://localhost:5050/entries')
//       const entries = await response.json();

//       setEntries(entries)
//     }

//     fetchEntries();
//   }, []);

//   const handleCheck = () => {
//     console.log ('check')
//   }
// console.log(entries) */}
