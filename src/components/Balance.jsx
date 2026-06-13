function Balance({ transactions }) {
  const balance = transactions.reduce((total, transaction) => {
    return transaction.type === "income"
      ? total + transaction.amount
      : total - transaction.amount;
  }, 0);

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="balance-card">
      <h2>Balance: €{balance}</h2>

      <p className="income-text">Income: €{income}</p>

      <p className="expense-text">Expenses: €{expenses}</p>
    </div>
  );
}

export default Balance; 