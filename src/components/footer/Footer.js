import React, { useState } from 'react'
import './footer.css'
const data = [
  "sonia", "dino", "fabian"
]
export default function Footer() {
  const [dataValue, setDataValue ] = useState(data)
const handleClick = () => {
  setDataValue([...dataValue, "peter"])
}
  
  return (
    <div className='footer'>
      <button onClick={handleClick}>add name</button>
     <ul>
      {/* {dataValue.map((item, index) => (
        <li onClick={() => alert(index)} key={index}>{item}</li>
      ))} */}
      <li>{dataValue[2]} is a boy</li>
     </ul>
    </div>
  )
}
