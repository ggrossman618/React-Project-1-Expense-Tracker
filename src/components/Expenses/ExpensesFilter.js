import React, { useState } from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const [currentState, setCurrentState] = useState("2021");

  function changeHandler(event) {
    setCurrentState(event.target.value);
    props.onNewFilterChange(currentState);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
export default ExpensesFilter;
