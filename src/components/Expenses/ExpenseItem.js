/* 
*** Component in react is just a combination of HTML + javascript 
function ***
*/

import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /* props can be named anything, holds input parameters*/
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle('Updated!');
    console.log('Updated!')
  }

  return (
    //you cannot return multiple things, so wrap everything in <div>
    /*you can replace hard-coded data with data inside {}, and inside 
    the {}, you can do basic java expressions, such as 1+1 */
    // <ExpenseDate></ExpenseDate> = <ExpenseDate>, no paraemeter in the middle

    <Card className="expense-item">
      <ExpenseDate date={props.date} /> {/*passing props.date to expenseDate*/}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>{" "}
      {/*you don't execute function using (), you just point to it */}
    </Card>
  );
}

export default ExpenseItem;
