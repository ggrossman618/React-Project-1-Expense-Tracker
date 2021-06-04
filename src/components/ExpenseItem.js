/* 
*** Component in react is just a combination of HTML + javascript 
function ***
*/

import ExpenseDate from './ExpenseDate.js';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /* props can be named anything, holds input parameters*/

  return (
    //you cannot return multiple things, so wrap everything in <div>
    /*you can replace hard-coded data with data inside {}, and inside 
    the {}, you can do basic java expressions, such as 1+1 */
    // <ExpenseDate></ExpenseDate> = <ExpenseDate>, no paraemeter in the middle

    <div className="expense-item">
      <ExpenseDate date={props.date}/> {/*passing props.date to expenseDate*/} 
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
