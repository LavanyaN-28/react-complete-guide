import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem= (props) => {

  const [amount,setAmount]=useState(props.amount)

  const updateExpense = () =>{
    setAmount('100');
    console.log('Amount Updated')
  }

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <ExpenseDetails
            amount={amount}
            locationOfExpenditure={props.locationOfExpenditure}
            title={props.title}
          />
        </div>
        <button className='delete-btn' onClick={updateExpense}>Update Expense</button>
      </Card>
    )
    
}


export default ExpenseItem;