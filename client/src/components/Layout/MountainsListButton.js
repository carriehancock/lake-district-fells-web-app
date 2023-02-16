import React from "react"
import MountainsListIcon from "./MountainsListIcon"
import classes from "./MountainsListButton.module.css"
const MountainsListButton = (props) => {
    // const [value, setValue] = React.useState('menu');
       
    //     const handleChange = (event) => {
       
    //       setValue(event.target.value);
          
    return (
    <button className="btn btn-primary" onClick>
        <span>
            <MountainsListIcon/>
        </span> 

        <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn m-1">Main Menu <MountainsListIcon/></label>
   
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
        </div>        
    </button>
    
    )
    }




export default MountainsListButton;