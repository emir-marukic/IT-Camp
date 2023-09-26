import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="exspense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="exspense-item__price">$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
