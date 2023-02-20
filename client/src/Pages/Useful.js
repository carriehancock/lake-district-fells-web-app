import classes from "../Components/MountainsInfo/MountainList.module.css";
import React from "react"
function UsefulStuff() {

return (
<>
<section className = {classes.intro} type="container"></section>    
<h1 className={classes.pageTitle} > Useful Links</h1>
<hr/>
<h6 className = {classes.summary}>Weather forecasts for mountain areas in the UK including MWIS and the Met Office</h6>
<hr/>
<section/>
<div class="list-group">
  <a href="https://www.mountain-forecast.com/" class="list-group-item list-group-item-action">
    Mountain Forecast
  </a>
  <a href="https://www.metoffice.gov.uk/weather/specialist-forecasts/mountain" class="list-group-item list-group-item-action">Met Office</a>
  <a href="https://www.mwis.org.uk/information/webcams/scotland" class="list-group-item list-group-item-action">Mountain Weather Information Service</a>
  <a href="https://www.windy.com/?53.648,-1.781,5" class="list-group-item list-group-item-action">Windy Map and Weather Forecast</a>
  </div>
<br></br>

  <div>
    <img className={classes.img2} src="https://www.weather.gov/source/zhu/ZHU_Training_Page/winds/Wx_Terms/mountain_eddies.png" alt=""></img>
  </div>
</>
)
};

export default UsefulStuff