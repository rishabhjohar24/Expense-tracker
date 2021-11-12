import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 545.44,
    date: new Date(2019, 0, 2),
  },
  {
    id: "e2",
    title: "Tv",
    amount: 54645.44,
    date: new Date(2019, 2, 4),
  },
  {
    id: "e3",
    title: "Fridge",
    amount: 45.44,
    date: new Date(2020, 9, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    console.log(":In App.js");
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
