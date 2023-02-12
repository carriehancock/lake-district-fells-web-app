// import React from 'react'


// // const FellList = () => {
// //     const [entries, setEntries] = useState([]);
  
// //     useEffect(() => {
// //       const fetchEntries = async () => {
// //         const response = await fetch('http://localhost:5050/')
// //         const entries = await response.json();
  
// //         setEntries(entries)
// //       }
  
// //       fetchEntries();
// //     }, []);
// // }

// const FellList = ({entries = [], onCheck}) => {
//   const handleClick = () => {
//     onCheck()
//   } 
//     return(
// <main>
//      <h3>Fells</h3>      
     
//         <div className="FellList">
//         <ul>
//             {entries.map(entry => ( 
//             <li key={entry.id}>
//             <span>
//                 {entry.id}
//             </span>
            
//             </li>))}
//             <li>Fells should be listed here but I currently cannot create a table within the database to fetch from. 
//             <button><span onClick={handleClick} role="img" aria-label="check">x</span></button>
//             </li>
            
//             </ul>
//             <button className="UpdateButton">Update Map</button>

//         </div>
//       </main>
//     )
// }

// export default MountainsList 