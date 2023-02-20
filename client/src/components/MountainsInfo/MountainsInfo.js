import classes from "./MountainsInfo.module.css"
import React, {Fragment} from "react"
import mainImage from "../UI/Images/main-img.jpg"

const ChallengeSummary = () => {
    return (
        <Fragment>
        <div className={classes.imgContainer}>
        <img className={classes.mainImage} src ={mainImage} alt="Ben Nevis and the CMD Arete"/>
        <div className={classes.info}>
        <h2 className={classes.infoh2}>Welcome to the National 3 x 5 Peaks Challenge</h2>
        <p className={classes.para}>Climb the five highest mountains within Scotland, England and Wales   </p>
        <p className ={classes.para}>Log your progress and enjoy the adventure - Check off the mountains as you go and save any important information from your climb</p> <p>(routes, weather or the quality of the company you had on the day)</p>
    </div>
    </div>
    </Fragment>
        
    );
};

export default ChallengeSummary