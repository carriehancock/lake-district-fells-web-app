import React from "react";
import {useEffect, useState} from 'react'

import Card from 'react-bootstrap/Card';

import classes from "../Components/MountainsInfo/MountainList.module.css";

function FurtherInformationPage () {
  
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
<section className = {classes.intro} type="container"></section>    
<h2 className={classes.pageTitle} > Mountain Information Page</h2>
<hr/>
<p className = {classes.summary}>Use the features on this page to plan your climb and upload your information. The route finder suggests potential routes for each mountain.</p>
<hr/>
<section/>

{mountainGroups.map (group => (



      <div><h2 className={classes.countryTitle}>{group.name}</h2>
      <div className = {classes.mountainCard}>
       
       {group.mountains.map((mountain) => {
          return (
            <div className = {classes.indivCard} type="container">
              
            <Card style={{ width: '42rem', height: "45rem"}}>
            <Card.Body>
             <Card.Title>{mountain.mountainName}
                </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">   Elevation: {mountain.heightm}m OD</Card.Subtitle> <Card.Link className={classes.link}className="mb-2 text-muted" href={mountain.mapLink} > Grid Reference: {mountain.gridReference}  </Card.Link>
              <Card.Text>{mountain.infoText}
                 </Card.Text>
            
            </Card.Body>
            <Card.Img style={{ width: '100%', height: "400px"}} className={classes.img} variant="fixed" src= {mountain.img}></Card.Img>
            <Card.Link ></Card.Link>
            
          </Card>
          </div>
        )
      })}
      </div>
      </div> 
      ))}
      <div>
        <section type = "container" className = "moreInfo">
          <p>Mountains rock</p>

        </section>
      </div>

</main>
  )
}









export default FurtherInformationPage