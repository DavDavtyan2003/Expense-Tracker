import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("salary");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      id: Date.now(),
      description,
      category,
      amount: Number(amount),
      type,
    };

    if (transaction.description.trim() === "") {
      setError("Please add a description.");
      return;
    } else if (transaction.amount === 0 || isNaN(transaction.amount)) {
      setError("Please enter a valid amount.");
      return;
    }

    setError("");
    addTransaction(transaction);

    setDescription("");
    setAmount("");
    setType("income");
    setCategory("salary");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="form-row">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="salary">Salary</option>
          <option value="grocery">Grocery</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button type="submit" className="submitBtn">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;