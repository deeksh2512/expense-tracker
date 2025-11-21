import { useState } from 'react';
import BalanceSummary from './components/BalanceSummary.jsx';
import TransactionList from './components/TransactionList.jsx';
import AddTransactionForm from './components/AddTransactionForm.jsx';
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
  };
  
  return (
    <div className="container">
      <h1 className="header-title">
        Expense Tracker
      </h1>
      
      <BalanceSummary transactions={transactions} />

      <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />

      <AddTransactionForm onAdd={handleAddTransaction} />
    </div>
  );
}

export default App
