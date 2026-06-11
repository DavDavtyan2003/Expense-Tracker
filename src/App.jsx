import { useState } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";


function App() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  
  const deleteTransaction = (id) => {
  const updatedTransactions = transactions.filter(
    (transaction) => transaction.id !== id
  );

  setTransactions(updatedTransactions);
};

  return (
      <div className="container">
        
        <h1>Expense Tracker</h1>

        <Balance transactions={transactions} />

        <TransactionForm addTransaction={addTransaction} />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

      </div>
  )
}

export default App
