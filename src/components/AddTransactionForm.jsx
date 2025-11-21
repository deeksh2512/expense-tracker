import React, { useState } from 'react';

const AddTransactionForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    
    if (!text.trim() || amount === '' || isNaN(parseFloat(amount))) {
      setError('Please add a valid text description and numeric amount.');
      return;
    }
    
    const newTransaction = {
      id: Date.now(), 
      text: text.trim(),
      amount: parseFloat(amount), 
      date: Date.now(), 
    };

    onAdd(newTransaction);
    
    setText('');
    setAmount('');
  };

  return (
    <div className="new-txn-section">
      <h3 className="title">Add new transaction</h3>
      
      {error && (
        <div className="error-msg" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="form-group">
        <div>
          <label htmlFor="text" className="form-lbl">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction description..."
            className="form-input"
            maxLength="50"
          />
        </div>

        <div>
          <label htmlFor="amount" className="form-lbl">
            Amount (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., -100 for expense, 500 for income"
            className="form-input"
            step="0.01"
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;