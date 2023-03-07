import React from 'react'
import "../css/navbar.css"
const Navibar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className="navbar-logo">
                    <h3>OnlineMovies<span className='navbar-span'>.net</span></h3>
                </div>
                <div className='navbar-searchbar'>
                    <i className="fa fa-search search" aria-hidden="true"></i>
                    <input className='navbar-input' type="text" />
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li>Home</li>
                        <li>Trending</li>
                        <li>Browse Movies</li>
                    </ul>   
                </div>
            </div></>
    )
}

export default Navibar