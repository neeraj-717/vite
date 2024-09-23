import React, { useState } from 'react'
import movieArr from '../components/SearchData'


function SearchDataa() {
    const [inputv, setinputv] = useState("")
    const [filtervalue, setfiltervalue] = useState([])
    const hendlesearch = (v) => {
        setinputv(v.target.value)
        console.log("ram")
        setfiltervalue(
            movieArr.filter((e) => {
                return (e.title.toLowerCase().includes(inputv))
            })
        )
    }
       const hendeloption = (v) =>{
        let value = v.target.value
        let filter = movieArr.filter((e)=>{
            return (e.genre.includes(value))
        })  
        setfiltervalue(filter)
    }
    


    return (
        <>
            <div className='m-0 p-0'>
                <h3 className='text-center '>Search Movie</h3>
                <div className="container p-0">
                    <div className="row p-0" style={{ height: '92vh' }}>
                        <div className="col-md-4 shadow rounded  border   h-100">
                            <select name="" id="" onClick={hendeloption} className='w-100 my-3 p-2'>
                                <option value="" selected disabled>Search By Genre</option>
                                {movieArr.map((gen, i) => {
                                    return (
                                        <option key={i} value={gen.genre}>{gen.genre}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-md-4 shadow rounded border overflow-auto h-100">
                            <input className='w-100 p-2 my-3' type="search" value={inputv} placeholder='Search Movie' onChange={hendlesearch} />
                            <div className=" ">
                                {filtervalue.map((moviame, indexs) => {
                                    return (
                                        <div key={indexs} className='d-flex justify-content-between  px-4 '>
                                            <p className='fw-bold' >{moviame.title}</p>
                                            <p className='' >{moviame.genre}</p>
                                        </div>
                                    )

                                })}
                            </div>

                        </div>
                        <div className="col-md-4 shadow rounded border overflow-auto py-4 h-100">
                            {movieArr.map((moviame, indexs) => {
                                return (
                                    <div key={indexs} className='d-flex justify-content-between  px-4 '>
                                        <p className='fw-bold' >{moviame.title}</p>
                                        <p className='' >{moviame.genre}</p>
                                    </div>
                                )

                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchDataa
