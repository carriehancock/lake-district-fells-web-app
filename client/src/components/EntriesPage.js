import {useEffect, useState} from 'react'


const EntriesPage = () => {
  const [entries, setEntries] = useState([]);
  

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('http://localhost:5050/entries')
      const entries = await response.json();

      setEntries(entries)
    }

    fetchEntries();
  }, []);

  console.log(entries)


  return (
  <>
    <div>
          
     </div>
        <div className="FellNames">
        <ul>
            {entries.map(entry => ( 
            <li key={entry.fellName}>
            <span>
                {entry.fellName}                
            </span>
            </li>
            
            ))}
             
            <button><span role="img" aria-label="check">x</span></button>

        </ul>
            
        <button className="UpdateButton">Update Map</button>

        </div>
        </>
  )
}

export default EntriesPage

//onClick={handleClick}
// const handleClick = () => {
//   onClick();