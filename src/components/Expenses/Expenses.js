import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
      <ul>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onNewFilterChange={newFilterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
        </Card>
      </ul>
    </div>
  );
}

export default Expenses;
