import {useEffect, useState} from 'react'


const EntriesPage = () => {
  const [mountains, setEntries] = useState([]);
  

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('http://localhost:5050/Mountains')
      const mountains = await response.json();

      setEntries(mountains)
    }

    fetchEntries();
  }, []);

  console.log(mountains)


  return (
  <>
    <div>
          
     </div>
        <div className="mountainNames">
        <ul>
            {mountains.map(entry => ( 
            <li key={entry.mountainName}>
            <span>
                {entry.mountainName}                
            </span>
            </li>
            
            ))}
             
            <input type="checkbox" class="checkbox checkbox-secondary" />
        </ul>
            
        <button class="btn btn-primary">Update</button>

        </div>
        </>
  )
}

export default EntriesPage

//onClick={handleClick}
// const handleClick = () => {
//   onClick();