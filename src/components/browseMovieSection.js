import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/browseMovieSection.css"
import { getPaginationMovies, getPaginationMovieWithQuery } from '../utils/requests'
const BrowseMovieSection = (props) => {
    const { searchUsed, queriedMovies,clicked } = props
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        if (clicked == 0) {
            getPaginationMovies(1, 10)
                .then((res) => {
                    setMovies(res.data)
                })
        }
        else{
            setMovies(queriedMovies)
        }
    },[clicked])
    const handleChangePage = (e) => {
        console.log(e.target.innerText)
        console.log("props query", props.query)
        setCurrentPage(Number(e.target.innerText))
        if(searchUsed == true){
            getPaginationMovieWithQuery(Number(e.target.innerText), 10, props.query)
                .then((res) => {
                    setMovies(res.data)
                })
                return;
        }
        getPaginationMovies(Number(e.target.innerText), 10)
            .then((res) => {
                setMovies(res.data)
            })
    }
    return (
        <>
            <div className="browse-movie-section-container">
                <div className='browse-title'>
                    <h4>Movies</h4>
                </div>
                <div className='pagination-div'>
                    <div class="pagination">
                        <a href="#" >&laquo;</a>
                        <a onClick={handleChangePage} className={currentPage == 1 ? "active" : ""} defaultValue={1} href="#">1</a>
                        <a onClick={handleChangePage} className={currentPage == 2 ? "active" : ""} href="#" >2</a>
                        <a onClick={handleChangePage} className={currentPage == 3 ? "active" : ""} href="#">3</a>
                        <a onClick={handleChangePage} className={currentPage == 4 ? "active" : ""} href="#">4</a>
                        <a onClick={handleChangePage} className={currentPage == 5 ? "active" : ""} href="#">5</a>

                        <a onClick={handleChangePage} href="#">&raquo;</a>
                    </div>
                </div>
                <div className="browse-movies">
                    {movies && movies.map((movie) => (<>
                        <div onClick={() => navigate(`/movies/${movie.id}`)} className="pop-movie-card">
                            <img src={movie.image} alt="" />
                            <div className="caption">
                                <h3>{movie.title}</h3>
                                <p>{movie.category_names}</p>
                            </div>
                        </div>
                    </>))}
                </div>
            </div>
        </>
    )
}

export default BrowseMovieSection