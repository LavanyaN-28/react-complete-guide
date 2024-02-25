import './ExpenseItem.css';

function ExpenseItem(){

    return (
      <div className='expense-item'>
        <div>March 28th 2023</div>
        <div className='expense-item__description'>
            <h2>Car Insurance</h2>
            <div className='location-of-expenditure'>Bengaluru</div>
            <div className='expense-item__price'>Rs 2955.75</div>    
        </div>
      </div>
    );
}



export default ExpenseItem;