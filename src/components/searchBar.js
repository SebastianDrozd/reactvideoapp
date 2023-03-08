import React, { useRef, useState } from 'react'
import "../css/searchBar.css"
import { requestMovieQuery } from '../utils/requests'
const SearchBar = () => {
    const [queriedMovies, setQueriedMovies] = useState([])
    const searchRef = useRef()
    const handleMovieQuery= () => {
        if(searchRef.current.value === ""){
            setQueriedMovies([])
            return;
        }
       requestMovieQuery(searchRef.current.value).then((res) => {
           setQueriedMovies(res.data)
       })
    }

    return (
        <>
            <div className="search-all">
                <div className='navbar-searchbar'>
                    <i className="fa fa-search search" aria-hidden="true"></i>
                    <input onChange={handleMovieQuery} ref={searchRef} className='navbar-input' type="text" />
                    <button className="search-button" onClick={handleMovieQuery} >Search</button>
                </div>
                <div className="search-dropdown">
                    <ul>
                       {queriedMovies && queriedMovies.map((movie) => (<>
                       <li className="query-row">
                        <img src={movie.image} height="100" width={100} alt="" />
                        <p style={{marginLeft:'10px'}}>{movie.title}</p>
                       </li>
                       </>))  }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchBar