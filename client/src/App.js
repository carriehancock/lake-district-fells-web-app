import Header from "./Components/Layout/Header.js"
import ChallengeSummary from "./Components/MountainsInfo/MountainsInfo.js";
import MountainList from './Components/MountainsInfo/MountainList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment} from "react"

function App() {

  return (
<html data-theme="coffee">  
  <main>
     
      <Header/> 
      
        <body>
    <Fragment> 
      <ChallengeSummary/>
      <MountainList /> 
    </Fragment>  
      
     </body>   
  </main>
</html> );
}

export default App;

// </div>
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
// console.log(entries)
