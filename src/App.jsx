import { useState, useEffect } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
      return stored ? JSON.parse(stored) : [];
    });
  const [filteredCategory, setFilteredCategory] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");

    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
      if (filteredCategory === "all") {
        return true;
      }
      
      return (transaction.category === filteredCategory);
  });

  const addTransaction = (transaction) => {
    setTransactions([
      ...transactions,
      transaction,
    ]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions =
      transactions.filter(
        (transaction) =>
          transaction.id !== id
      );

    setTransactions(updatedTransactions);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />

      <TransactionForm
        addTransaction={addTransaction}
      />

      <div>
        <label>Filter by category: </label>

        <select
          value={filteredCategory}
          onChange={(e) =>
            setFilteredCategory(
              e.target.value
            )
          }
        >
          <option value="all">
            All
          </option>
          <option value="salary">
            Salary
          </option>
          <option value="grocery">
            Grocery
          </option>
        </select>
      </div>

      <TransactionList
        transactions={
          filteredTransactions
        }
        deleteTransaction={
          deleteTransaction
        }
      />
    </div>
  );
}

export default App;