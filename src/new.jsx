import React from 'react'

function funct(props) {
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
funct.defaultProps={
  title:'...',
  discription:'...'
}

export default funct
