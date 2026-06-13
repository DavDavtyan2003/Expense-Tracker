function TransactionList({ transactions, deleteTransaction }) {
  if (transactions.length === 0) {
    return <p className="empty-state">No transactions yet — add one above!</p>;
  }

  return (
    <div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`transaction ${transaction.type}`}
        >
          <div className="transaction-info">
            <span>{transaction.description}</span>
            <span className="category">{transaction.category}</span>
          </div>

          <span className="transaction-amount">
            {transaction.type === "expense" ? "-" : "+"}€{transaction.amount}
          </span>

          <button
            className="delete-btn"
            onClick={() => deleteTransaction(transaction.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;