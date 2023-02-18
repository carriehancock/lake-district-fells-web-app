import {useEffect, useState} from 'react'
import MountainsListIcon from "./MountainsListIcon"
import classes from "./MountainsListButton.module.css"
const MountainsListButton = (props) => {
    // const [value, setValue] = React.useState('menu');
       
    //     const handleChange = (event) => {
       
    //       setValue(event.target.value);
    
    const [dropDown, setDrop] =useState(false) 

    return (
        <div>
            <div>
    <button className = {classes.button} onClick = {() => setDrop (!dropDown)}>
        Main Menu <MountainsListIcon/>
    </button></div>
        {/* <span>
            <MountainsListIcon/>
        </span>  */}

        {/* <div className="dropdown dropdown-bottom dropdown-end"> */}
        {/* <p tabIndex={0} className="btn m-1">Main Menu </p> */}
   
       <div className = {classes.menu}>
        {dropDown?
            (<ul tabIndex={0} >
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>) : null
        }
        </div>        
    </div>
        
    
    )
    }




export default MountainsListButton;