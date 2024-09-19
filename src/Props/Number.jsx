import React, { useState } from 'react'

function Number() {
    let [count,setcount]=useState(0)
    const clickincriment = ()=>{

if(count < 10){
    count+=1
setcount(count)
}else{
    alert("Your limet is extend")
}
    }
    const dictriment=()=>{
        if(count > -10){
            count-=1
        setcount(count)
        }else{
            alert("Your limet is extend")
        }
        

    }
    
    
  return (
    <div>
      <div className='w-25 py-5 border border-denger m-auto mt-5 text-center rounded'>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <div className="text-center">
            <button className='btn btn-sm btn-outline-warning'  onClick={dictriment}>Dicriment - {count}</button>
            <button  className='btn ms-1 btn-sm btn-outline-success 'onClick={clickincriment}>Inceiment + {count}</button>
        </div>
      </div>
      {/* <h1>jai</h1> */}
    </div>
  )
}

export default Number
