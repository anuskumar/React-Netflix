import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            
            <img className="logoimg" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8" ></img>
           
            <div className="buttons">
                <button className="lang_btn">
                    English
                </button>
                <button className="sign_btn">
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Navbar
