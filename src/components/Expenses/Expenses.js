import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  function newFilterChangeHandler(newSelectedYear) {
    console.log(newSelectedYear + "from ExpensesJS");
    setFilteredYear(newSelectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onNewFilterChange={newFilterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found!</p>
        ) : (
          //colon means else case, expense is a new variable name, can be anything
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id} //adding this key to deal with render times
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
