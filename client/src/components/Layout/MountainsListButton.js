import MountainsListIcon from "../MountainsInfo/MountainsListIcon"
import classes from "./MountainsListButton.module.css"
const MountainsListButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <MountainsListIcon/>
            </span> 
            <span className={classes.menu}>Main Menu</span> 
             
        </button>
    )
}

export default MountainsListButton