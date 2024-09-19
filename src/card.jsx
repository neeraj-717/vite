import React from 'react'

function card(title) {
  return (
    <div>
          <div className="card" style={{width: "18rem"}}>
 
 <div className="card-body">
   <h5 className="card-title">{props.title}</h5>
   <p className="card-text">Discription:
       {props.discription}
   </p>
   <a href="#" className="btn btn-primary">Go To Live</a>
 </div>
</div>
    </div>
  )
}

export default card
