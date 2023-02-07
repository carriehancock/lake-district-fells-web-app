import React from "react"
import { Fragment } from "react";
import MountainsListButton from "./MountainsListButton";
import mainImage from "../UI/Images/catbells-header-img.jpg"
import classes from "./Header.module.css" 
const Header = (props) => {
    return (
    
    <Fragment>
       
        <header className={classes.header}>
            <h1>National 10 x 3 Peaks</h1> 
            <MountainsListButton/>
        </header>
        <div className={classes["main-image"]}>
            <img src ={mainImage} alt="Catbells"/>
        </div>
    </Fragment>
    ); 
 };

 export default Header;


// React.Fragment - . React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
// header is a default HTML5 element 
//curly brackets i.e. for an image src={mainImage} dynamically binds the image