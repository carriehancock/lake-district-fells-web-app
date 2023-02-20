import React from "react"
import "./Header.module.css" 
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import classes from "./Header.module.css"

const Header = (props) => {
const [dropDown, setDrop] =useState(true)   
  
  return (
         <div>
         <span class ="border-bottom" className="border border-info"> <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div class = {classes.logo} className='container-fluid'>
              <a className='navbar-brand' href='/'>
                3 x 5 Peaks
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setDrop(!dropDown)}
              >
                <span className='navbar-toggler-icon' />
              </button>
              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <a className='nav-link active' aria-current='page' href='/'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='./FurtherInformation/id'>
                      Information
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='./UsefulStuff'>
                      Useful stuff
                    </Link>
                  </li>
                  
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='/'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                      
                    >
                      Route planning
                    </a>
                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                      <li>
                        <a className='dropdown-item' href='#'>
                          GPX Routes
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Mountain Weather Forecast
                        </a>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <a className='dropdown-item' href='/'>
                          Members Posts
                        </a>
                      </li>
                      <li className='nav-item'>
                    <Link className='nav-link' to='./FurtherInformation'>
                      FAQ
                    </Link>
                  </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link disabled' href='/'>
                      Log In
                    </a>
                  </li>
                </ul>
                {/* <form className='d-flex' role='search'>
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <button className='btn btn-outline-success' type='submit'>
                    Search
                  </button>
                </form> */}
              </div>
            </div>
          </nav>
          </span>
        </div>
      )
    }
    
       
   
//     ); 
//  };

 export default Header;
{/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">National 3 x 5 Peaks</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>



// React.Fragment - . React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
// header is a default HTML5 element 
//curly brackets i.e. for an image src={mainImage} dynamically binds the image */}