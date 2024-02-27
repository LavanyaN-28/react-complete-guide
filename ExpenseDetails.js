import './ExpenseItem.css';

function ExpenseDetails(props){

    return(
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
          <div className="location-of-expenditure">
            {props.locationOfExpenditure}
          </div>
          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
    
    )
}

export default ExpenseDetails