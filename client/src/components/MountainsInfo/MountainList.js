import {useEffect, useState} from 'react'
import classes from "./MountainList.module.css"
import Card from 'react-bootstrap/Card';
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
      <div><h2 className={classes.countryTitle}>{group.name}</h2>
      <div className = {classes.mountainCard}>
       
       {group.mountains.map((mountain) => {
          return (
            <div className = {classes.indivCard} >
              
            <Card style={{ width: '22rem', height: "24.5rem"}}>
            <Card.Body>
             <Card.Title>{mountain.mountainName}
                </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{mountain.heightm}m OD</Card.Subtitle>
              <Card.Text
               class="custom-control custom-switch">
                <label class="custom-control-label" for="customSwitches"> Climbed: </label>
                <input type="checkbox" class="custom-control-input" ></input>
              </Card.Text>
            
            </Card.Body>
            <Card.Img style={{ width: '100%', height: "18vmax"}} className={classes.img} variant="fixed" src= {mountain.img}></Card.Img>
            <Card.Link className={classes.link}href="#">Further information</Card.Link>
            
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
