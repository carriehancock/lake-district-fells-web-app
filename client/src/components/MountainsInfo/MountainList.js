import {useEffect, useState} from 'react'
import classes from "./MountainList.module.css"
import Card from 'react-bootstrap/Card';
import MountainCard from '../UI/Images/MountainCard'
import benNevis from "../UI/Images/ben-nevis-img.jpg"
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

  const scotlandMountains = mountains.filter(mountain => mountain.country === "Scotland") 

  const englandMountains = mountains.filter(mountain => mountain.country === "England")

  const walesMountains = mountains.filter(mountain => mountain.country === "Wales")

  
  
  
  console.log(mountains)

  const mountainGroups = [{name: 'Scotland', mountains: scotlandMountains}, {name: 'England', mountains: englandMountains}, {name: 'Wales', mountains: walesMountains}]

return (

  <main>
    {mountainGroups.map (group => (
      <div><h2>{group.name}</h2>
      <div className = {classes.mountainCard}>
       
       {group.mountains.map((mountain) => {
          return (
            <div >
              
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{mountain.mountainName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{mountain.heightm}</Card.Subtitle>
              <Card.Text>
                {""}
              </Card.Text>
              <Card.Link href="#">LINK</Card.Link>
              <Card.Link href="#">LINK</Card.Link>
            </Card.Body>
            <Card.Img variant="bottom" src= {benNevis}></Card.Img>
          </Card>
          </div>
        )
      })}
      </div>
      </div> 
      ))}
         
  </main>

  )}

export default MountainList;
