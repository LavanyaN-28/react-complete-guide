import React, { useState } from "react";

import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from './components/Expenses/Expenses';

  const expensesSample = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Chennai"
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "Bengaluru"    
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Delhi"
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Kolkata"
    },
  ];
const App = () =>{
  const [expenses,setExpenses]=useState(expensesSample);
  
  const addExpenseHandler = (expense) =>{

    //setExpenses([expense,...expenses])
    setExpenses((prevExpenses)=>{
      return(
        [expense,...prevExpenses]
      )
    })

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
