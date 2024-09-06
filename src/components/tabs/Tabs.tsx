"use client"

import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index)
  }

  return (
    <div className="container">
      <div className="block-tabs">
        <div className="tabs active-tabs" onClick={() => toggleTab(1)}>primer</div>
        <div className="tabs">segundo</div>
        <div className="tabs">tercero</div>
      </div>
      <div className="content-tabs">
        <div className="content active-content">a</div>
        <div className="content">b</div>
        <div className="content">c</div>
      </div>
    </div>
  );
}

export default Tabs;
