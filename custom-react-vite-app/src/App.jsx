import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

const actualReactElement = React.createElement(
  "a",
  {href: "https://netflix.com", target: "_blank"},
  "Visit netfilx here ",
  `this is me shubham kumar and i am in ${4}th year`
);

// Above the 4th property is the js which is evaluated means if i write {4+4} inside a html
// this mean react will evaluate it and put it in the 4th place of React.createElement();
// that why when we use if or for it does not work at all but using ternary operator works
// as they return some value or get evaluated to one answer

function App() {
  return (
    <>
      <h1>Hello jee</h1>
      {actualReactElement}
    </>
  )
}

export default App
