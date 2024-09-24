"use client"
import { useState } from "react";
import React  from 'react'

function Test  () {
    const [value, setValue] = useState(0)

  return (
    <div className="test">
        <div className= 'value'> {value}</div>
        <button onClick={()=>{setValue(value * 3)}}>Tap</button>
    </div>
  );
}

export default Test;
