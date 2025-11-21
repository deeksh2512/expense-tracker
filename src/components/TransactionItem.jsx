import React from 'react';
import formatCurrency from '../Formatcurrency.js'; 

const TransactionItem = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const itemClass = transaction.amount < 0 ? 'minus' : 'plus';
  
  const date = new Date(transaction.date);

  const formattedDate = date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric', 
  });

  return (
    <li className={`txn-item ${itemClass}`}>
      <span className="txn-text">
        {transaction.text} 
        <span className="txn-date"> ({formattedDate})</span>
      </span>
      <div className="txn-value-group">
        <span className="txn-amount">
          {sign} {formatCurrency(transaction.amount)}
        </span>
        <button
          onClick={() => onDelete(transaction.id)}
          className="delete-btn"
          aria-label={`Delete transaction ${transaction.text}`}
        >
          &times;
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;