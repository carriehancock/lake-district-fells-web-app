import {useEffect, useState} from 'react'
import classes from "./MountainList.module.css"
import Card from "../UI/Images/Card.js"

const MountainList = () => {
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

  const allPeaks = mountains.map(entry => <li> {entry.mountainName}</li>);
  return (
  <section>
    <Card>
      <ul className={classes.mountainsul}>
          {allPeaks}
      </ul> 
    </Card>  
      <input type="checkbox" class="checkbox checkbox-secondary" />
      <button class="btn btn-primary">Update</button>
  </section>
  )
}

export default MountainList

//onClick={handleClick}
// const handleClick = () => {
//   onClick();