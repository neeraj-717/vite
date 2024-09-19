import React from 'react'
import PropsType from "prop-types"
function propsmathered(
   {
    title, 
    discription
   }
) {
  return (
    <div>
       <div className="card" style={{width: "18rem"}}>
 
 <div className="card-body">
   <h5 className="card-title">title:{title}</h5>
   <p className="card-text">Discription:
       {discription}
   </p>
   <a href="#" className="btn btn-primary">Go To Live</a>
 </div>
</div>
    </div>
  )
}

export default propsmathered
propsmathered.propsType={
    title:PropsType.number.isRequired
}