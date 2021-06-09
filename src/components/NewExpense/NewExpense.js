import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [formOpenState, setFormOpenState] = useState(false);

  function formOpenStateHandler(){
    setFormOpenState(true);
  }

  function formOpenStateHandlerFromChild(confirm){
    if(confirm === true){
      setFormOpenState(false);
    }
  }

  function saveEventDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  if (formOpenState === false) {
    return <button onClick={formOpenStateHandler}>Add New Expense</button>;
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveEventDataHandler} changedOpenState={formOpenStateHandlerFromChild}/>
      
      </div>
    );
  }
}

export default NewExpense;
