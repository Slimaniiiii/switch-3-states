import React, { useState } from "react";
import "./App.css";

function App() {
  const [filter, setFilter] = useState(2);

  const currentStatus = (filter) => {
    switch (filter) {
      case 1:
        return "Approved";
      case 2:
        return "Neutral";
      case 3:
        return "Rejected";
      default:
        return "Neutral";
    }
  };

  return (
    <div className="container">
      <div className="tss">
        <input
          type="radio"
          name="tss"
          id="on"
          value="1"
          checked={filter === 1}
          onChange={() => setFilter(1)}
        />
        <label htmlFor="on">
          <span></span>
          <i
            className={`ion-checkmark-round ${filter === 1 ? "green" : ""}`}
          ></i>
        </label>
        <input
          type="radio"
          name="tss"
          id="na"
          value="2"
          checked={filter === 2}
          onChange={() => setFilter(2)}
        />
        <label htmlFor="na">
          <span></span>
          <i className={`ion-record ${filter === 2 ? "yellow" : ""}`}></i>
        </label>
        <input
          type="radio"
          name="tss"
          id="off"
          value="3"
          checked={filter === 3}
          onChange={() => setFilter(3)}
        />
        <label htmlFor="off">
          <span></span>
          <i className={`ion-close-round ${filter === 3 ? "red" : ""}`}></i>
        </label>
      </div>
      <div
        className={`current-status ${filter === 1 ? "green" : ""} ${
          filter === 2 ? "yellow" : ""
        } ${filter === 3 ? "red" : ""}`}
        style={{ marginTop: "10px" }}
      >
        {currentStatus(filter)}
      </div>
    </div>
  );
}

export default App;
