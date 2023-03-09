import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/navbar.css"
import SearchBar from './searchBar'
const Navibar = () => {
    const navigate = useNavigate()
    const handleBrowseButton = () => {
        navigate('/browse')
    }
    const handleLogoButton = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <>
            <div className='navbar-container'>
                <div className="navbar-logo">
                    <h3 style={{ cursor: "pointer" }} onClick={handleLogoButton}>OnlineMovies<span className='navbar-span'>.net</span></h3>
                </div>
                <SearchBar />
                <div className='navbar-links'>
                    <ul>
                        <li style={{cursor: "pointer"}}  onClick={handleLogoButton}>Home</li>
                        <li style={{cursor: "pointer"}} onClick={handleBrowseButton}>Browse Movies</li>
                    </ul>
                </div>
            </div></>
    )
}

export default Navibar