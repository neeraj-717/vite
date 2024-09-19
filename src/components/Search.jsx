import React from 'react'
import movieArr from './SearchData'
// console.log(movieArr)
function Search() {
    return (
        <div className='m-0 p-0'>
            <h3 className='text-center'>Search Movie</h3>
            <div className="container p-0">
                <div className="row p-0" style={{ height: '92vh' }}>
                    <div className="col-md-4 shadow rounded h-100">
                        <select name="" id="" className='w-100 p-1'>
                            <option value="" selected disabled>Search By Genre</option>
                            {movieArr.map((gen,i)=>{
                                return(
                                    <option key={i} value={gen.genre}>{gen.genre}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-md-4 shadow rounded h-100">
                        <input type="search" className='form-control' placeholder='Search movies' />
                    </div>
                    <div className="col-md-4 shadow rounded h-100 overflow-auto py-2 px-5">
                        {movieArr.map((movie, index) => {
                           return(
                            <p key={index} className='d-flex justify-content-between'>
                            <span className='fw-bold'>{movie.title}</span>
                            <span className='text-secondary'>{movie.genre}</span>
                        </p>
                           )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
