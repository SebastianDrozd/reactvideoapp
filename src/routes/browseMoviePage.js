import React, { useRef, useState } from 'react'
import BrowseMovieSection from '../components/browseMovieSection'
import "../css/browseMoviePage.css"
import { getPaginationMovieWithQuery } from '../utils/requests'
const BrowseMoviePage = () => {
    const searchTerm = useRef()
    const genre = useRef()
    const year = useRef()
    const [searchUsed, setSearchUsed] = useState(false)
    const handleSearch = (e) => {
        setSearchUsed(true)
        e.preventDefault()
        console.log(searchTerm.current.value)
        console.log(genre.current.value)
        console.log(year.current.value)
        const query = {
            name : searchTerm.current.value,
            genre : genre.current.value,
            year : year.current.value
        }
        getPaginationMovieWithQuery()
    }
    return (
        <>
            <div className="browse-main-container">
                <div className="search-main-container">
                    <div className="search-container">
                        <h4 className='browse-t'>Search term: </h4>
                        <input ref={searchTerm} className='browse-search-bar' type="text" placeholder="Search for movies, tv shows, actors" />
                        <div className="search-filters">
                            <div className="select-container">
                                <p className='select-title'>Genre</p>
                                <select ref={genre} name="genre">
                                    <option value="all">All</option>
                                    <option value="action">Action</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="animation">Animation</option>
                                    <option value="biography">Biography</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="crime">Crime</option>
                                    <option value="documentary">Documentary</option>
                                    <option value="drama">Drama</option>
                                    <option value="family">Family</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="film-noir">Film-Noir</option>
                                    <option value="game-show">Game-Show</option>
                                    <option value="history">History</option>
                                    <option value="horror">Horror</option>
                                    <option value="music">Music</option>
                                    <option value="musical">Musical</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="news">News</option>
                                    <option value="reality-tv">Reality-TV</option>
                                    <option value="romance">Romance</option>
                                    <option value="sci-fi">Sci-Fi</option>
                                    <option value="sport">Sport</option>
                                    <option value="talk-show">Talk-Show</option>
                                    <option value="thriller">Thriller</option>
                                    <option value="war">War</option>
                                    <option value="western">Western</option>
                                </select>
                            </div>
                            <div className="select-container">
                                <p className='select-title'>Year</p>
                                <select ref= {year}  name="year">
                                    <option value="0">All</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2015-2018">2015-2018</option>
                                    <option value="2010-2014">2010-2014</option>
                                    <option value="2000-2009">2000-2009</option>
                                    <option value="1990-1999">1990-1999</option>
                                    <option value="1980-1989">1980-1989</option>
                                    <option value="1970-1979">1970-1979</option>
                                    <option value="1950-1969">1950-1969</option>
                                    <option value="1900-1949">1900-1949</option>
                                </select>
                            </div>
                            <div className="select-container">
                                <p className='select-title'>Length</p>
                                <select  name="year">
                                    <option value="0">All</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2015-2018">2015-2018</option>
                                    <option value="2010-2014">2010-2014</option>
                                    <option value="2000-2009">2000-2009</option>
                                    <option value="1990-1999">1990-1999</option>
                                    <option value="1980-1989">1980-1989</option>
                                    <option value="1970-1979">1970-1979</option>
                                    <option value="1950-1969">1950-1969</option>
                                    <option value="1900-1949">1900-1949</option>
                                </select>
                            </div>
                            <div className="browse-button-div">
                                <button onClick={handleSearch} className='browse-button'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <BrowseMovieSection/>
            </div>
        </>
    )
}

export default BrowseMoviePage