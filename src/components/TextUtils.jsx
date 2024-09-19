import React, { useState } from 'react'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
function TextUtils() {
    const [textValue, setTextValue] = useState('')
    const [Showinfo, setShowinfo] = useState(false)

    const handleChange = (e) => {
        setTextValue(e.target.value)
    }
    const handleUppercase = () => {
        setTextValue(textValue.toUpperCase())
        // setShowinfo(true)

        // Swal.fire({
        //     title: 'Success',
        //     text: 'Text Converted toupperCase!',
        //     icon: 'success',
        //     confirmButtonText: 'ok'
        //   })

        Swal.fire('Text Converted to upperCase !')
    }

    const handleClear = () => {
        setTextValue('')
        Swal.fire('Text is Clear !')

    }
    const handleLowerCase = () => {
        toast('converted to lowercase',{
            duration:2000,
            icon:"😍😎😍",
            position : 'top-right'
        })
    }

    let cahrCount = textValue.replaceAll(' ', '')


    let wrdArr = textValue.split(' ')
    let wrdCount = wrdArr.filter(wrd => wrd.length > 0)

    return (
        <>
            
            <div className="container w-75 px-5 py-4 shadow">
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" className='fs-5'>Text Utils</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        id="exampleFormControlTextarea1"
                        value={textValue}
                        onChange={handleChange}
                    ></textarea>
                </div>
                {Showinfo && <p className='text-info text-center fs-5'>Text Converted toUpperCase !</p>}
                <div className="buttos d-flex justify-content-center gap-4 my-3">
                    <button className="btn btn-sm btn-outline-success" onClick={handleUppercase}>UpperCase</button>
                    <button className="btn btn-sm btn-outline-secondary" onClick={handleLowerCase}>LowerCase</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={handleClear}>Clear</button>
                    <button className="btn btn-sm btn-outline-info">Copy</button>
                    <button className="btn btn-sm btn-outline-warning">Cut</button>
                    <button className="btn btn-sm btn-outline-primary">Pest</button>
                </div>

                <p className="fs-5">Charctor Count :- {cahrCount.length}</p>
                <p className="fs-5">Word Count :- {wrdCount.length}</p>
            </div>
            <div className="container px-5 py-4">
                <p>{textValue}</p>

            </div>
        </>
    )
}

export default TextUtils
