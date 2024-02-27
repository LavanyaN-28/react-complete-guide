import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import React from 'react';

const ExpenseItem= (props) => {

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <ExpenseDetails
            amount={props.amount}
            locationOfExpenditure={props.locationOfExpenditure}
            title={props.title}
          />
        </div>
      </Card>
    )
    
}


export default ExpenseItem;