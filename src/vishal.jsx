import React from 'react'

function vishal(props) {
  return (
    <div>
      <h1>Hii my name is {props.name} </h1>
      <h1>Hello</h1>
      
    </div>
  )
}
vishal.defaultProps={
    name:'...',
    address:'...'
}
export default vishal
