import React, { useState } from 'react'
import toast from 'react-hot-toast';
function TextUtilss() {
  const [TextValue, setTextValue] = useState('')

  const hendletextvalue = (e) => {
    setTextValue(e.target.value)
  }

  const heandletoUpperCase = () => {
    setTextValue(TextValue.toUpperCase())
    toast.success('Text Converted to upprCase!', {
      duration: 2000,
      position: 'top-right'
    })

  }

  const heandlelovercase = () => {
    setTextValue(TextValue.toLowerCase())
    toast.success('Text Converted to lowerCase!', {
      duration: 2000,
      position: 'top-right'
    })
  }

  const heandleClear = () => {
    setTextValue("")
    toast.success('Text Cleared!!', {
      duration: 2000,
      position: 'top-right'
    })


  }

  const heandleCopy = (p) => {
    window.navigator.clipboard.writeText(TextValue)
    
    
    toast.success('Text Copied!!!', {
      duration: 2000,
      position: 'top-right'
    })
    
  }
  
  const heandleCut = () => {
    window.navigator.clipboard.writeText(TextValue)
    setTextValue("")
    toast.success("Text cut !!!!", {
      duration: 2000,
      position: 'top-right'

    })
  }
  
  const heandlePest = () => {
    navigator.clipboard.readText()
    .then((res) => setTextValue( TextValue + ' ' + res))
    setTextValue(TextValue.trim())
    toast.success("Text copypast !!!!", {
      duration: 2000,
      position: 'top-right'
  
    })
      
  }

  const letterCount = TextValue.replace(/[^a-zA-Z]/g, "").length

  // Calculate word count
  const wordCount = TextValue.split(" ").filter(word => word.length > 0).length
  console.log(wordCount)

  return (
    <>
    <button className='bg-dark text-light '>Dark Mode</button>
      <div className="w-75 container p-5">
        <div className="form-group">
          <label className='fs-5 m-auto' htmlFor="exampleFormControlTextarea1">Text Utils</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={TextValue} onChange={hendletextvalue}></textarea>

        </div>
        <div className="contaner d-flex justify-content-center gap-3 py-4">
          <button className="btn btn-ms btn-outline-success" onClick={heandletoUpperCase}>UpperCase</button>
          <button className="btn btn-ms btn-outline-secondary" onClick={heandlelovercase}>LowerCase</button>
          <button className="btn btn-ms btn-outline-danger" onClick={heandleClear}>Clear</button>
          <button className="btn btn-ms btn-outline-info" onClick={heandleCopy}>Copy</button>
          <button className="btn btn-ms btn-outline-warning" onClick={heandleCut}>Cut</button>
          <button className="btn btn-ms btn-outline-success" onClick={heandlePest}>Paste</button>
        </div>
        <p className='fs-5'>Letter Count: {letterCount}</p>
        <p className='fs-5'>Word Count: {wordCount}</p>
      </div>
    </>
  )
}

export default TextUtilss
