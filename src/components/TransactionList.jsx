import React from 'react';
import TransactionItem from './TransactionItem.jsx';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="history">
      <h3 className="title">History</h3>
      {transactions.length === 0 ? (
        <p className="no-txn">No transactions yet. Add one below!</p>
      ) : (
        <ul className="txn-list">
          {transactions.map(transaction => (
            <TransactionItem 
                key={transaction.id} 
                transaction={transaction} 
                onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;