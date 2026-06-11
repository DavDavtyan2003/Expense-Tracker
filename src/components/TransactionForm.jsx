import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("salary");


  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      id: Date.now(),
      description,
      category,
      amount: Number(amount),
      type,
    };

    console.log(transaction)

    addTransaction(transaction);

    setDescription("");
    setAmount("");
    setType("income");
    setCategory("salary");
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)} 
      >
        <option value="salary">salary</option>
        <option value="grocery">Grocery</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;