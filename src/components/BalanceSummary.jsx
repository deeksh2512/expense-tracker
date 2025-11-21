import React from 'react';
import formatCurrency from '../formatCurrency.js'; 


const BalanceSummary = ({ transactions }) => {
  let total = 0;
  let income = 0;
  let expense = 0;
  
  for (let i = 0; i < transactions.length; i++) {
    const amount = transactions[i].amount;
    total += amount;
    if (amount > 0) {
      income += amount;
    } else {
      expense += amount; 
    }
  }

  const formattedTotal = total.toFixed(2);
  const formattedIncome = income.toFixed(2);
  const formattedExpense = Math.abs(expense).toFixed(2);

  return (
    <div className="summary">
      <div className="balance-box">
        <h4 className="balance-lbl">YOUR BALANCE</h4>
        <h1 className="balance-amt">
          {formatCurrency(formattedTotal)}
        </h1>
      </div>

      <div className="inc-exp-box">
        <div className="inc-exp-item income">
          <div className="inc-exp-lbl">INCOME</div>
          <div className="inc-exp-val">
            {formatCurrency(formattedIncome)}
          </div>
        </div>
        
        <div className="inc-exp-item expense">
          <div className="inc-exp-lbl">EXPENSE</div>
          <div className="inc-exp-val">
            {formatCurrency(formattedExpense)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;