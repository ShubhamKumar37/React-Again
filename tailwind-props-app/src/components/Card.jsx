import React from 'react'

const Card = ({obj}) => {

    // console.log(props);
    console.log("This is object = ");
    const {name, age} = obj || {};
  return (
    <div>
      <h1>Card</h1>
      <p>This is card</p>

      {/* <h2>My name is {props?.name} { props?.age}</h2> */}
      <h2>My name is {name} {age}</h2>

    </div>
  )
}

export default Card

