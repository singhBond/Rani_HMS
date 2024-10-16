"use client";
import { useState } from "react";
import React from "react";

function Test() {
  const [value, setValue] = useState(0);

  return (
    <section>
      <div className="test">
        <div className="value"> {value}</div>
        <button
          onClick={() => {
            setValue(value + 5);
          }}
        >
          Tap
        </button>
      </div>
      <div>
        
      </div>
    </section>
  );
}

export default Test;
